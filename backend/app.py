from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import threading
from record_mic import record_audio
from api_02 import upload, save_transcript
import os

app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware

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
        return JSONResponse(status_code=400, content={"message": "Recording is already in progress."})

    recording_active = True

    # Start a new thread for recording
    recording_thread = threading.Thread(target=record_audio, args=(recorded_filename, lambda: recording_active))
    recording_thread.start()

    return {"message": "Recording started."}


@app.post("/stop-recording", response_model=TranscriptionResponse)
def stop_recording():
    global recording_active

    if not recording_active:
        return JSONResponse(status_code=400, content={"message": "No recording in progress to stop."})

    recording_active = False

    if recording_thread and recording_thread.is_alive():
        recording_thread.join()

    # Process the audio file
    process_audio()

    output_file = 'file_title.txt'
    if os.path.exists(output_file):
        with open(output_file, 'r') as file:
            content = file.read()
        return TranscriptionResponse(message="Recording stopped.", content=content)
    else:
        return TranscriptionResponse(message="Recording stopped, but no transcription found.")
