// När användaren klickar på knappen:
document.getElementById('enterBtn').addEventListener('click', function() {
    
    // Hämta den inskriva åldern från ålder-inputfältet:
    let age = parseInt(document.getElementById('ageInput').value);
    
    // Läs om VIP-checkboxen är ikryssad eller inte (true om den är ikryssad, annars false)
    let vip = document.getElementById('vipCheckbox').checked;

    // Kolla om personen är VIP, om inte - kolla om den är över 18, om inte - neka inträde. 
    if (vip) {
        alert("Welcome my best VIP customer :)");
    } else if (age >= 18) {
        alert("Access granted");
    } else {
        alert("Access denied");
    }
});
