project-root/
├── backend/
│   ├── app.py
│   ├── capture_audio.py
│   ├── caption_handler.py
│   ├── video_processor.py
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── main.js
├── chrome_extension/
│   ├── manifest.json
│   ├── background.js
│   ├── content.js
│   ├── popup.html
│   └── popup.js
└── requirements.txt
└── caption.txt

HOW TO RUN:

---> Run the following command to create a new virtual environment if you haven't already: python -m venv venv
1. Activate the virtual environment by running: .\venv\Scripts\activate in main folder
   

2. With the virtual environment activated, you can now install the dependencies specified in requirements.txt: pip install -r backend/requirements.txt

3. To run the Flask application, navigate to the backend directory and execute the following command:   cd backend
                                                                                                        python app.py

--------------------------------------------------------------------------------------------------------------------------------------------------------------

CHROME EXTENSION

1. manifest.json
This file defines the metadata and permissions for your Chrome extension.

2. background.js
This file handles communication between the content script (which captures captions) and the Flask backend.

3. content.js
This file is injected into web pages and is responsible for detecting captions and sending them to the background script.

4. popup.html
This file defines the UI for the Chrome extension's popup.

5. popup.js
This file handles the logic for the popup UI.

How It Works
manifest.json: Defines the extension's metadata, permissions, and files.
background.js: Acts as a bridge between the content script and the Flask backend. It listens for messages from the content script and sends captions to the backend.
content.js: Injected into web pages to detect captions and send them to the background script.
popup.html: Provides a simple UI for the extension's popup.
popup.js: Handles the logic for the popup UI, allowing the user to start capturing captions.

Testing the Chrome Extension

1. Open Chrome and go to chrome://extensions/.

2. Enable Developer mode (toggle in the top-right corner).

3. Click Load unpacked and select the chrome_extension folder.

4. Open a webpage with captions (e.g., a YouTube video with subtitles).

5. Click the extension icon and click Start Capturing.

6. Check the browser console for logs and ensure captions are being sent to the Flask backend.

--------------------------------------------------------------------------------------------------------------------------------------------------------------
