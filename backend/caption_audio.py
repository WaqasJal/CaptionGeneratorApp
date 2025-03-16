import asyncio
import sounddevice as sd
import numpy as np
import whisper

model = whisper.load_model("base")

async def capture_audio_and_transcribe():
    print("Starting audio capture and transcription...")
    stream = sd.InputStream(samplerate=16000, channels=1, dtype='int16')
    stream.start()

    while True:
        data, overflowed = stream.read(4096)
        if overflowed:
            print("Audio buffer overflowed")
        audio_array = np.frombuffer(data, dtype=np.int16).astype(np.float32) / 32768.0
        result = model.transcribe(audio_array)
        transcription = result["text"]
        print(f"Transcription: {transcription}")

    stream.stop()
    stream.close()