"""
# import requests
# from api_02 import *

# filename = "output.wav"
# audio_url = upload(filename)
# save_transcript(audio_url, 'file_title')
import requests
from api_02 import *
from text_to_speech import *  # Import the text-to-speech functionality
XI_API_KEY = "sk_17496c4d6057c9d6cb0304d2aa028aafc53c4bc253fddb6b"  # Your API key for authentication
VOICE_ID = "Xb7hH8MSUJpSbSDYk0k2"  # ID of the voice model to use
# TEXT_TO_SPEAK = "Start recording... Press 'Enter' to stop."  # Text you want to convert to speech
OUTPUT_PATH = "output.mp3"  # Path to save the output audio file
def main():
    filename = "output.wav"
    
    # Upload audio and save transcript
    audio_url = upload(filename)
    save_transcript(audio_url, 'file_title')
    transcript_data, error = get_transcription_result_url(audio_url)

    if transcript_data and not error:
        # Extract text from transcription
        transcription_text = transcript_data['text']
        # print("Transcription Text:", transcription_text)

        # Use transcription text for TTS
        TEXT_TO_SPEAK = transcription_text  # Use the transcribed text
        OUTPUT_PATH = "output.mp3"  # Path to save the TTS output
        generate_audio_from_text(XI_API_KEY, VOICE_ID, TEXT_TO_SPEAK, OUTPUT_PATH)
    else:
        print("Transcription Error:", error)

# def save_text_to_speech(text, output_path):
#     # Define constants for the script
#     XI_API_KEY = "sk_17496c4d6057c9d6cb0304d2aa028aafc53c4bc253fddb6b"  # Your API key for authentication
#     VOICE_ID = "Xb7hH8MSUJpSbSDYk0k2"  # ID of the voice model to use

#     # Construct the URL for the Text-to-Speech API request
#     tts_url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}/stream"

#     # Set up headers for the API request, including the API key for authentication
#     headers = {
#         "Accept": "application/json",
#         "xi-api-key": XI_API_KEY
#     }

#     # Set up the data payload for the API request
#     data = {
#         "text": text,
#         "model_id": "eleven_multilingual_v2",
#         "voice_settings": {
#             "stability": 0.5,
#             "similarity_boost": 0.8,
#             "style": 0.0,
#             "use_speaker_boost": True
#         }
#     }

#     # Make the POST request to the TTS API with headers and data
#     response = requests.post(tts_url, headers=headers, json=data, stream=True)

#     # Check if the request was successful
#     if response.ok:
#         with open(output_path, "wb") as f:
#             for chunk in response.iter_content(chunk_size=CHUNK_SIZE):
#                 f.write(chunk)
#         print("Audio stream saved successfully as:", output_path)
#     else:
#         print("Error during TTS request:", response.text)

if __name__ == "__main__":
    main()
"""






###################################################################################################
import requests
from api_02 import *  # Importing the transcription functions
from text_to_speech import *  # Importing text-to-speech functionality
from record_mic import record_audio  # Importing the recording function

XI_API_KEY = "sk_17496c4d6057c9d6cb0304d2aa028aafc53c4bc253fddb6b"  # Your API key for authentication
VOICE_ID = "Xb7hH8MSUJpSbSDYk0k2"  # ID of the voice model to use
OUTPUT_PATH = "output.mp3"  # Path to save the TTS output


def main():
    # Step 1: Record audio from the microphone
    print("Recording your voice. Press 'Esc' to stop.")
    recorded_filename = "output.wav"
    record_audio(recorded_filename)  # Function to record and save audio

    # Step 2: Upload audio and get transcription
    print("Uploading and transcribing your recorded audio...")
    audio_url = upload(recorded_filename)
    save_transcript(audio_url, 'file_title')
    transcript_data, error = get_transcription_result_url(audio_url)

    if transcript_data and not error:
        # Step 3: Extract text from transcription
        transcription_text = transcript_data['text']
        print("Transcription Text:", transcription_text)

        # Step 4: Use transcription text for Text-to-Speech
        TEXT_TO_SPEAK = transcription_text  # Use the transcribed text
        generate_audio_from_text(XI_API_KEY, VOICE_ID, TEXT_TO_SPEAK, OUTPUT_PATH)
        print(f"Generated speech saved to: {OUTPUT_PATH}")
    else:
        print("Transcription Error:", error)


if __name__ == "__main__":
    main()

