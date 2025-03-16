// Log when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
    console.log("Chrome Live Caption Capturer Extension Installed.");
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "captions") {
        // Send the captions to the Flask backend
        fetch("http://127.0.0.1:5000/captions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ caption: message.text }),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Caption sent:", data);
            sendResponse({ success: true }); // Send a response back to the content script
        })
        .catch(err => {
            console.error("Error sending caption:", err);
            sendResponse({ success: false, error: err.message }); // Send an error response
        });

        // Return true to indicate that the response will be sent asynchronously
        return true;
    }
});