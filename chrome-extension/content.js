// Monitor the webpage for captions
const captionElement = document.querySelector(".captions-text"); // Adjust the selector to match the actual caption element

if (captionElement) {
    let previousCaption = "";

    // Capture the text content of the captions every second
    setInterval(() => {
        const currentCaption = captionElement.innerText;

        // Only send the caption if it has changed
        if (currentCaption && currentCaption !== previousCaption) {
            previousCaption = currentCaption;

            // Send the caption to the background script
            chrome.runtime.sendMessage(
                { type: "captions", text: currentCaption },
                (response) => {
                    if (response && response.success) {
                        console.log("Caption sent successfully:", currentCaption);
                    } else {
                        console.error("Failed to send caption:", response?.error);
                    }
                }
            );
        }
    }, 1000); // Check for new captions every second
} else {
    console.error('Caption element not found. Check the selector.');
}