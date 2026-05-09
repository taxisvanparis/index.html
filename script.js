function calculerPrix() {
    // 1. Récupération des valeurs
    const distance = parseFloat(document.getElementById('distance').value);
    const nbPassagers = parseInt(document.getElementById('passagers').value);
    const optionsSiege = parseInt(document.getElementById('optionSiege').value);

    if (isNaN(distance) || distance <= 0) {
        alert("Veuillez entrer une distance valide");
        return;
    }

    // 2. Paramètres de prix
    const priseEnCharge = 15;
    const prixKm = 2.90;
    const prixSiege = 2.90;
    const supplementPassagerPrix = 5.50;

    // 3. Calcul
    let total = priseEnCharge + (distance * prixKm);

    // Ajout option siège bébé
    if (optionsSiege > 0) {
        total += prixSiege;
    }

    // Ajout suppléments passagers (à partir du 5ème passager, donc > 4)
    if (nbPassagers > 4) {
        let passagersSupp = nbPassagers - 4;
        total += (passagersSupp * supplementPassagerPrix);
    }

    // 4. Affichage
    const display = document.getElementById('resultat');
    const prixSpan = document.getElementById('prixTotal');
    
    display.style.display = "block";
    prixSpan.innerText = total.toFixed(2);
}
