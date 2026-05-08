<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taxi Van Paris | Mercedes Classe V</title>
    <style>
        :root { --gold: #c9a24a; --black: #000000; --grey: #121212; --white: #ffffff; }
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: var(--black); color: var(--white); margin: 0; padding: 0; }
        
        .hero { 
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                        url('https://images.vroomerz.com/vroomerz/rental-mercedes-v-class-vroomerz.jpg');
            background-size: cover; background-position: center; height: 250px; display: flex; align-items: center; justify-content: center; text-align: center;
        }

        .container { max-width: 480px; margin: -50px auto 30px; padding: 15px; }
        .card { background: var(--grey); border-radius: 15px; padding: 25px; border: 1px solid #333; box-shadow: 0 15px 40px rgba(0,0,0,0.7); }
        
        h1 { color: var(--gold); font-size: 1.7rem; text-transform: uppercase; margin: 0; letter-spacing: 1px; }
        label { display: block; margin: 15px 0 5px; font-size: 0.75rem; color: var(--gold); font-weight: bold; letter-spacing: 1px; }
        input, select { width: 100%; padding: 14px; border-radius: 8px; border: 1px solid #333; background: #222; color: white; box-sizing: border-box; font-size: 1rem; }

        .price-box { background: linear-gradient(135deg, #c9a24a, #8e6d2a); color: var(--black); padding: 20px; border-radius: 10px; text-align: center; margin: 25px 0; display: none; }
        .price-val { font-size: 2.5rem; font-weight: 900; }

        .btn { display: block; width: 100%; padding: 18px; border-radius: 8px; font-weight: bold; text-align: center; text-decoration: none; border: none; font-size: 1.1rem; transition: 0.3s; cursor: pointer; }
        .btn-white { background: var(--white); color: var(--black); margin-bottom: 12px; }
        .btn-gold { background: var(--gold); color: var(--black); }
        
        .footer-icons { display: flex; justify-content: space-around; margin-top: 25px; font-size: 0.75rem; opacity: 0.6; font-weight: bold; }
    </style>
</head>
<body>

<div class="hero">
    <div>
        <h1>Taxi Van Paris</h1>
        <p style="font-size: 0.8rem; letter-spacing: 2px;">VOTRE CHAUFFEUR PRIVÉ EN CLASSE V</p>
    </div>
</div>

<div class="container">
    <div class="card">
        <label>📍 POINT DE DÉPART</label>
        <input type="text" id="start" placeholder="Adresse, Gare ou Hôtel">

        <label>🏁 DESTINATION</label>
        <input type="text" id="end" placeholder="Aéroport ou Adresse">

        <label>👥 NOMBRE DE PASSAGERS</label>
        <select id="pax">
            <option value="1">1 à 4 Passagers (Tarif Standard)</option>
            <option value="5">5 Passagers (+5,50 €)</option>
            <option value="6">6 Passagers (+11,00 €)</option>
            <option value="7">7 Passagers (+16,50 €)</option>
        </select>

        <label>👶 ÉQUIPEMENT (OFFERT)</label>
        <select id="kids">
            <option value="Aucun">Sans siège enfant</option>
            <option value="1 Siège Bébé">1 Siège Bébé</option>
            <option value="1 Réhausseur">1 Réhausseur</option>
            <option value="Bébé + Réhausseur">Bébé + Réhausseur</option>
        </select>

        <label>📱 VOTRE TÉLÉPHONE</label>
        <input type="tel" id="mobile" placeholder="06 .. .. .. ..">

        <button class="btn btn-white" style="margin-top: 25px;" onclick="estimer()">CALCULER LE TARIF</button>

        <div id="resultBox" class="price-box">
            <span style="font-size: 0.8rem; font-weight: bold; text-transform: uppercase;">Estimation Tarif Tout Inclus</span>
            <div class="price-val" id="finalPrice">-- €</div>
            <span id="paxNote" style="font-size: 0.7rem;">Mercedes Classe V Premium</span>
        </div>

        <button id="waBtn" class="btn btn-gold" style="display:none;" onclick="reserver()">RÉSERVER SUR WHATSAPP</button>
    </div>

    <div class="footer-icons">
        <span>🚐 CLASSE V</span>
        <span>🍼 SIÈGES BÉBÉ</span>
        <span>💳 CB / AMEX</span>
    </div>
</div>

<script>
    function estimer() {
        const dep = document.getElementById('start').value.toLowerCase();
        const arr = document.getElementById('end').value.toLowerCase();
        const paxCount = parseInt(document.getElementById('pax').value);
        const phone = document.getElementById('mobile').value;

        if (dep.length < 3 || arr.length < 3 || phone.length < 8) {
            alert("Veuillez remplir les adresses et votre téléphone.");
            return;
        }

        let prixBase = 0;
        
        // Logique Forfaits vs Calcul
        if (arr.includes("roissy") || arr.includes("cdg") || dep.includes("roissy")) {
            prixBase = 90;
        } else if (arr.includes("orly") || dep.includes("orly")) {
            prixBase = 80;
        } else {
            // Simulation : 15€ base + (15km * 2.80€) = 57€
            prixBase = 15 + (15 * 2.80);
        }

        // Ajout supplément passagers (5,50€ à partir du 5ème)
        let supplementPax = 0;
        if (paxCount >= 5) {
            supplementPax = (paxCount - 4) * 5.5;
        }

        let total = prixBase + supplementPax;

        document.getElementById('finalPrice').innerText = Math.round(total) + " €";
        document.getElementById('resultBox').style.display = "block";
        document.getElementById('waBtn').style.display = "block";
        
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    function reserver() {
        const dep = document.getElementById('start').value;
        const arr = document.getElementById('end').value;
        const pax = document.getElementById('pax').value;
        const kids = document.getElementById('kids').value;
        const price = document.getElementById('finalPrice').innerText;
        const phone = document.getElementById('mobile').value;

        const msg = `DEMANDE TAXI VAN PARIS\n\n` +
                    `🚐 VÉHICULE : Mercedes Classe V\n` +
                    `📍 DÉPART : ${dep}\n` +
                    `🏁 ARRIVÉE : ${arr}\n` +
                    `👥 PASSAGERS : ${pax}\n` +
                    `👶 SIÈGE : ${kids}\n` +
                    `💰 PRIX : ${price}\n` +
                    `📱 CLIENT : ${phone}`;

        window.location.href = "https://wa.me/33649553640?text=" + encodeURIComponent(msg);
    }
</script>

</body>
</html>
