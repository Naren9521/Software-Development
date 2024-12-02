
# files after part 2
import requests
import time
from api_secrets import API_KEY_ASSEMBLYAI

upload_endpoint = 'https://api.assemblyai.com/v2/upload'
transcript_endpoint = 'https://api.assemblyai.com/v2/transcript'

headers_auth_only = {'authorization': API_KEY_ASSEMBLYAI}

headers = {
    "authorization": API_KEY_ASSEMBLYAI,
    "content-type": "application/json"
}

CHUNK_SIZE = 5_242_880  # 5MB


def upload(filename):
    def read_file(filename):
        with open(filename, 'rb') as f:
            while True:
                data = f.read(CHUNK_SIZE)
                if not data:
                    break
                yield data

    upload_response = requests.post(upload_endpoint, headers=headers_auth_only, data=read_file(filename))
    return upload_response.json()['upload_url']


def transcribe(audio_url):
    transcript_request = {
        'audio_url': audio_url
    }

    transcript_response = requests.post(transcript_endpoint, json=transcript_request, headers=headers)
    return transcript_response.json()['id']

        
def poll(transcript_id):
    polling_endpoint = transcript_endpoint + '/' + transcript_id
    polling_response = requests.get(polling_endpoint, headers=headers)
    return polling_response.json()


def get_transcription_result_url(url):
    transcribe_id = transcribe(url)
    while True:
        data = poll(transcribe_id)
        if data['status'] == 'completed':
            return data, None
        elif data['status'] == 'error':
            return data, data['error']
            
        print("waiting for 1 seconds")
        # time.sleep(1)

def save_transcript(url, title):
    data, error = get_transcription_result_url(url)
        # print(data)
    if data:
        filename = title + '.txt'
        with open(filename, 'w') as f:
            f.write("Full Transcription:\n")
            f.write(data['text'] + "\n\n")
    
            # Write word details
            f.write("Word-by-Word Breakdown:\n")
            for word_data in data['words']:
                f.write(f"Word: {word_data['text']}\n")
                f.write(f"  Start Time: {word_data['start']} ms\n")
                f.write(f"  End Time: {word_data['end']} ms\n")
                f.write(f"  Confidence: {word_data['confidence']}\n\n")
        print('Transcript saved')
        return "Transcript saved"
    elif error:
        print("Error!!!", error)
