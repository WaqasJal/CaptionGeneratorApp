import ffmpeg
import whisper

model = whisper.load_model("base")

def process_video(video_file):
    audio_file = "extracted_audio.wav"
    ffmpeg.input(video_file).output(audio_file).run()
    result = model.transcribe(audio_file)
    return result["text"]