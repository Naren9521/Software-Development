from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import threading
from record_mic import record_audio
from api_02 import upload, save_transcript
import os
from api_secrets import GROQ_API_KEY, prompt
from groq import Groq
import random
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
            print('enhanced_repsonse',enhanced_response)
        return TranscriptionResponse(
            message="Transcription retrieved successfully.", content=enhanced_response
        )
    else:
        return TranscriptionResponse(
            message="No transcription available.", content=""
        )
books = [
    {"name": "Ikigai", "image": "/images/ikigai.jpg", "pdfUrl": "/pdf/ikigai.pdf"},
    {"name": "The Art of Happiness", "image": "/images/happiness.jpg", "pdfUrl": "/pdf/art_of_happiness.pdf"},
    {"name": "Anne Frank", "image": "/images/anne.jpg", "pdfUrl": "/pdf/anne_frank.pdf"},
    {"name": "The Conch Bearer", "image": "/images/bearer.jpg", "pdfUrl": "/pdf/conch_bearer.pdf"},
    {"name": "The Alchemist", "image": "/images/alchemist.jpg", "pdfUrl": "/pdf/alchemist.pdf"},
    {"name": "12 Rules for Life", "image": "/images/rules_12.jpg", "pdfUrl": "/pdf/rules_12.pdf"}
]

# Model for summary response
class SummaryResponse(BaseModel):
    summary: str

# Function to call the Groq API and get the summary
def get_groq_summary(book_name: str) -> str:
    prompt = f"Give a summary of the book '{book_name}'"
    
    try:
        completion = client.chat.completions.create(
            model="llama3-8b-8192",  # Adjust this if necessary
            messages=[{"role": "user", "content": prompt}],
            temperature=0
        )
        return completion.choices[0].message.content
    except Exception as e:
        print(f"Error generating summary from Groq: {e}")
        return "An error occurred while generating the summary."
class FeedbackResponse(BaseModel):
    transcription: str
    grammar_feedback: str
    suggested_sentence: str

def get_groq_feedback(transcription: str) -> FeedbackResponse:
    """
    Get feedback from Groq API based on the transcription.
    """
    try:
        prompt = (
            f"Analyze this English transcription for grammar not the captallization and full stops but any other general issues,Note :dont respond with analysis if the text is in hinglish or any other language , resposnd only if it is in english if any other language respond as speak in english "
            f"list mistakes, and suggest improvements:\n\n{transcription}"
        )
        completion = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=[{"role": "user", "content": prompt}],
            temperature=0,
        )
        feedback = completion.choices[0].message.content
        # Process response into structured feedback
        return FeedbackResponse(
            transcription=transcription,
            grammar_feedback=feedback,
            suggested_sentence="Suggested sentence or corrections go here.",
        )
    except Exception as e:
        print(f"Error with Groq API: {e}")
        return FeedbackResponse(
            transcription=transcription,
            grammar_feedback="Error generating feedback.",
            suggested_sentence="Error generating suggestions."
        )

class SpeechFeedbackRequest(BaseModel):
    speech_text: str

@app.post("/speech/feedback", response_model=FeedbackResponse)
async def analyze_speech(request: SpeechFeedbackRequest):
    speech_text = request.speech_text
    if not speech_text.isascii():
        return JSONResponse(
            status_code=400,
            content={"error": "Non-English speech detected. Please speak in English."},
        )
    feedback = get_groq_feedback(speech_text)
    
    return feedback
# FastAPI route to get the summary of a book
@app.get("/get-summary", response_model=SummaryResponse)
async def get_summary(book: str):
    # Check if the book exists in the static list
    book_found = next((book_item for book_item in books if book_item["name"].lower() == book.lower()), None)
    
    if not book_found:
        return JSONResponse(status_code=404, content={"error": "Book not found"})
    
    # Fetch summary from Groq
    
    summary = get_groq_summary(book_found["name"])
    print('summary',summary)
    
    return SummaryResponse(summary=summary)
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
        print('completion',completion)
        return completion.choices[0].message.content
    except Exception as e:
        print(f"Error generating response from Groq: {e}")
        return "An error occurred while generating the enhanced transcription report."

# from pymongo import MongoClient
# from urllib.parse import quote_plus
# import random
# # # Encode username and password
# username = quote_plus("su-22012")
# password = quote_plus("Narendra123@#")

# # Construct the URI
# uri = f"mongodb+srv://{username}:{password}@gramai.jc23s.mongodb.net/?retryWrites=true&w=majority&appName=GramAi"

# client = MongoClient(uri)
# db = client['gramai_database']
# collection = db['pronunciation_texts']

# @app.get("/get-random-sentence")
# async def get_random_sentence(level: str):
#     # Check if the level is valid
#     if level not in ["Easy", "Medium", "Hard"]:
#         return {"error": "Invalid level"}
    
#     # Query the database to get all documents for the selected level
#     query = {level.lower() + 'text': {"$exists": True}}
#     documents = list(collection.find(query))
    
#     if not documents:
#         return {"error": f"No data found for {level} level"}
    
#     # Randomly select a document and return the corresponding text
#     selected_document = random.choice(documents)
#     return {"text": selected_document.get(level.lower() + 'text')}

easy_sentences = [
    "The cat is on the mat.",
    "She likes to read books.",
    "He plays football every day."
]

medium_sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She traveled to many countries last year.",
    "They enjoy hiking in the mountains during the weekends."
]

hard_sentences = [
    "Despite the challenges, he managed to finish the project ahead of the deadline.",
    "The research findings suggested that the correlation between the variables was not statistically significant.",
    "The complexity of the problem required an innovative solution to achieve optimal results."
]

@app.get("/get-random-sentence")
async def get_random_sentence(level: str):
    # Check if the level is valid
    if level not in ["Easy", "Medium", "Hard"]:
        return {"error": "Invalid level"}
    
    # Select the appropriate list based on the level
    if level == "Easy":
        sentences = easy_sentences
    elif level == "Medium":
        sentences = medium_sentences
    elif level == "Hard":
        sentences = hard_sentences
    
    # Randomly select a sentence
    selected_sentence = random.choice(sentences)
    
    return {"text": selected_sentence}