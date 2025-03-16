from flask import Flask, request, jsonify
from flask_cors import CORS
import asyncio
import websockets
from capture_audio import capture_audio_and_transcribe
from caption_handler import handle_caption
from video_processor import process_video

app = Flask(__name__)
CORS(app)

@app.route('/captions', methods=['POST'])
def receive_caption():
    return handle_caption(request)

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    asyncio.run(capture_audio_and_transcribe())
    return jsonify({"message": "Transcription started"}), 200

@app.route('/process_video', methods=['POST'])
def process_video_file():
    video_file = request.files['video']
    transcription = process_video(video_file)
    return jsonify({"transcription": transcription}), 200

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)

    