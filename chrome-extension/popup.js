// Ensure the DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // Send a message to the content script to start capturing captions
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, { type: "startCapturing" }, (response) => {
                    if (response && response.success) {
                        alert("Capturing live captions...");
                    } else {
                        alert("Failed to start capturing. Make sure the page has captions.");
                    }
                });
            });
        });
    } else {
        console.error('Start button not found.');
    }
});