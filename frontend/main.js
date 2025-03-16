document.getElementById('captureCaptions').addEventListener('click', () => {
    fetch('/captions', { method: 'POST' })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
});

document.getElementById('transcribeAudio').addEventListener('click', () => {
    fetch('/transcribe', { method: 'POST' })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
});

document.getElementById('processVideo').addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'video/*';
    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('video', file);
        fetch('/process_video', { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => {
                document.getElementById('transcriptionOutput').value = data.transcription;
            })
            .catch(error => console.error(error));
    };
    fileInput.click();
});

document.getElementById('downloadTranscription').addEventListener('click', () => {
    const transcription = document.getElementById('transcriptionOutput').value;
    const blob = new Blob([transcription], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transcription.txt';
    a.click();
    URL.revokeObjectURL(url);
});