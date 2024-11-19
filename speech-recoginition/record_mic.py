"""
# import pyaudio
# import wave
# import keyboard  # To detect keyboard press

# FRAMES_PER_BUFFER = 3200
# FORMAT = pyaudio.paInt16
# CHANNELS = 1
# RATE = 16000
# p = pyaudio.PyAudio()

# # starts recording
# stream = p.open(
#    format=FORMAT,
#    channels=CHANNELS,
#    rate=RATE,
#    input=True,
#    frames_per_buffer=FRAMES_PER_BUFFER
# )

# print("Start recording... Press 'Enter' to stop.")

# frames = []

# # Continue recording until Enter is pressed
# while True:
#     data = stream.read(FRAMES_PER_BUFFER)
#     frames.append(data)
    
#     # Check if 'Enter' is pressed to stop the recording
#     if keyboard.is_pressed('enter'):
#         print("Recording stopped.")
#         break

# # Stop and close the stream
# stream.stop_stream()
# stream.close()
# p.terminate()

# # Save the recording to a .wav file
# wf = wave.open("output.wav", 'wb')
# wf.setnchannels(CHANNELS)
# wf.setsampwidth(p.get_sample_size(FORMAT))
# wf.setframerate(RATE)
# wf.writeframes(b''.join(frames))
# wf.close()

# print("Audio saved as output.wav")
import pyaudio
import wave
from pynput import keyboard

CHUNK = 1024
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100

p = pyaudio.PyAudio()

stream = p.open(format=FORMAT,
                channels=CHANNELS,
                rate=RATE,
                input=True,
                frames_per_buffer=CHUNK)

frames = []

def on_press(key):
    global recording
    if key == keyboard.Key.esc:
        recording = False
        return False

listener = keyboard.Listener(on_press=on_press)
listener.start()

print("Recording started. Press Esc to stop.")
recording = True

while recording:
    data = stream.read(CHUNK)
    frames.append(data)

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open("output.wav", 'wb')
wf.setnchannels(CHANNELS)
wf.setsampwidth(p.get_sample_size(FORMAT))
wf.setframerate(RATE)
wf.writeframes(b''.join(frames))
wf.close()
"""






#####################################################################################


import pyaudio
import wave
from pynput import keyboard


def record_audio(output_filename):
    CHUNK = 1024
    FORMAT = pyaudio.paInt16
    CHANNELS = 1
    RATE = 44100

    p = pyaudio.PyAudio()

    stream = p.open(format=FORMAT,
                    channels=CHANNELS,
                    rate=RATE,
                    input=True,
                    frames_per_buffer=CHUNK)

    frames = []

    def on_press(key):
        nonlocal recording
        if key == keyboard.Key.esc:
            recording = False
            return False

    listener = keyboard.Listener(on_press=on_press)
    listener.start()

    print("Recording started. Press Esc to stop.")
    recording = True

    while recording:
        data = stream.read(CHUNK)
        frames.append(data)

    stream.stop_stream()
    stream.close()
    p.terminate()

    wf = wave.open(output_filename, 'wb')
    wf.setnchannels(CHANNELS)
    wf.setsampwidth(p.get_sample_size(FORMAT))
    wf.setframerate(RATE)
    wf.writeframes(b''.join(frames))
    wf.close()

    print(f"Audio saved as {output_filename}")
