from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import threading
from record_mic import record_audio
from api_02 import upload, save_transcript
import os
from api_secrets import GROQ_API_KEY, prompt
from groq import Groq

# Initialize the Groq client
client = Groq(api_key=GROQ_API_KEY)

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

recording_thread = None
recording_active = False
recorded_filename = "output.wav"


class TranscriptionResponse(BaseModel):
    message: str
    content: str = ""


def process_audio():
    """
    Process the recorded audio to transcribe and save the transcript.
    """
    global recorded_filename
    audio_url = upload(recorded_filename)
    save_transcript(audio_url, "file_title")


@app.post("/start-recording")
def start_recording():
    global recording_thread, recording_active

    if recording_active:
        return JSONResponse(
            status_code=400, content={"message": "Recording is already in progress."}
        )

    recording_active = True

    # Start a new thread for recording
    recording_thread = threading.Thread(
        target=record_audio, args=(recorded_filename, lambda: recording_active)
    )
    recording_thread.start()

    return {"message": "Recording started."}


@app.post("/stop-recording", response_model=TranscriptionResponse)
def stop_recording():
    global recording_active

    if not recording_active:
        return JSONResponse(
            status_code=400, content={"message": "No recording in progress to stop."}
        )

    recording_active = False

    if recording_thread and recording_thread.is_alive():
        recording_thread.join()

    # Process the audio file
    process_audio()

    output_file = "file_title.txt"
    if os.path.exists(output_file):
        with open(output_file, "r") as file:
            content = file.read()
        return TranscriptionResponse(message="Recording stopped.", content=content)
    else:
        return TranscriptionResponse(
            message="Recording stopped, but no transcription found."
        )


@app.get("/get-transcription", response_model=TranscriptionResponse)
def get_transcription():
    """
    API endpoint to retrieve the transcription of the recorded audio.
    """
    output_file = "file_title.txt"

    if os.path.exists(output_file):
        with open(output_file, "r") as file:
            transcription_content = file.read()
            enhanced_response = getGroqResponse(prompt, transcription_content)
        return TranscriptionResponse(
            message="Transcription retrieved successfully.", content=enhanced_response
        )
    else:
        return TranscriptionResponse(
            message="No transcription available.", content=""
        )

def getGroqResponse(prompt: str, content: str) -> str:
    """
    Generate a response using the Groq API.
    """
    try:
        completion = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=[
                {
                    "role": "user",
                    "content": f"{prompt}\n\nTranscription:\n{content}",
                }
            ],
            temperature=0,
        )
        print(completion.choices[0].message.content)
        return completion.choices[0].message.content
    except Exception as e:
        print(f"Error generating response from Groq: {e}")
        return "An error occurred while generating the enhanced transcription report."

from pymongo import MongoClient
from urllib.parse import quote_plus
import random
# Encode username and password
username = quote_plus("su-22012")
password = quote_plus("Narendra123@#")

# Construct the URI
uri = f"mongodb+srv://{username}:{password}@gramai.jc23s.mongodb.net/?retryWrites=true&w=majority&appName=GramAi"

client = MongoClient(uri)
db = client['gramai_database']
collection = db['pronunciation_texts']

@app.get("/get-random-sentence")
async def get_random_sentence(level: str):
    # Check if the level is valid
    if level not in ["Easy", "Medium", "Hard"]:
        return {"error": "Invalid level"}
    
    # Query the database to get all documents for the selected level
    query = {level.lower() + 'text': {"$exists": True}}
    documents = list(collection.find(query))
    
    if not documents:
        return {"error": f"No data found for {level} level"}
    
    # Randomly select a document and return the corresponding text
    selected_document = random.choice(documents)
    return {"text": selected_document.get(level.lower() + 'text')}
