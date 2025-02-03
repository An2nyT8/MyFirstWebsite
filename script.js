// JavaScript
document.getElementById("changeTextBtn").addEventListener("click", function() {
    // Hole das Text-Element
    var textElement = document.getElementById("text");

    // Überprüfe, ob der Text bereits geändert wurde
    if (textElement.innerText === "Der Text hat sich geändert!") {
        // Wenn der Text bereits geändert wurde, setze ihn zurück
        textElement.innerText = "Dies ist der ursprüngliche Text.";
    } else {
        // Andernfalls ändere den Text
        textElement.innerText = "Der Text hat sich geändert!";
    }
});