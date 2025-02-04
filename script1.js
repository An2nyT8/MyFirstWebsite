// JavaScript, um das Formular zu verarbeiten
document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Verhindert das automatische Absenden des Formulars

    // Vorname aus dem Eingabefeld holen
    const firstName = document.getElementById("firstName").value;

    // Überprüfen, ob ein Vorname eingegeben wurde
    if (firstName) {
        document.getElementById("message").innerText = "Hallo, " + firstName + "! Du hast deinen Vornamen erfolgreich eingegeben.";
    } else {
        document.getElementById("message").innerText = "Bitte gib deinen Vornamen ein.";
    }
});
