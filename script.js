// JavaScript
var isChanged = false; // Flag, um den Zustand zu verfolgen

document.getElementById("changeTextBtn").addEventListener("click", function() {
    var textElement = document.getElementById("text");

    if (isChanged) {
        // Wenn der Text bereits geändert wurde, setze ihn zurück
        textElement.innerText = "Dies ist der ursprüngliche Text.";
    } else {
        // Wenn der Text noch nicht geändert wurde, ändere ihn
        textElement.innerText = "Der Text hat sich geändert!";
    }

    // Toggle den Zustand
    isChanged = !isChanged;
});