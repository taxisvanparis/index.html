<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Réservation Van & Taxi Paris | Aéroports | Mise à disposition</title>
  <meta name="description" content="Réservez votre van ou taxi à Paris et en Île-de-France. Transfert aéroports, siège bébé, rehausseur, mise à disposition et Mercedes Classe V noir." />
  <style>
    :root{
      --bg:#0b0b0f;
      --card:#14141b;
      --text:#f4f4f6;
      --muted:#b6b6c2;
      --gold:#c9a24a;
      --line:#2a2a35;
      --green:#16a34a;
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      font-family:Arial, Helvetica, sans-serif;
      background:linear-gradient(180deg,#050507,#111117);
      color:var(--text);
    }
    header{
      min-height:100vh;
      display:grid;
      grid-template-columns:1.1fr .9fr;
      gap:30px;
      align-items:center;
      padding:40px;
    }
    .hero{
      max-width:780px;
    }
    .badge{
      display:inline-block;
      padding:8px 14px;
      border:1px solid var(--gold);
      color:var(--gold);
      border-radius:999px;
      font-size:14px;
      margin-bottom:18px;
    }
    h1{
      font-size:clamp(34px,6vw,64px);
      line-height:1.05;
      margin:0 0 18px;
    }
    p{color:var(--muted); line-height:1.7}
    .cta-row{
      display:flex;
      gap:12px;
      flex-wrap:wrap;
      margin-top:24px;
    }
    .btn{
      padding:14px 20px;
      border-radius:12px;
      border:none;
      cursor:pointer;
      font-weight:700;
      text-decoration:none;
      display:inline-block;
    }
    .btn-primary{background:var(--gold); color:#111}
    .btn-secondary{background:transparent; color:var(--text); border:1px solid var(--line)}
    .visual{
      background:var(--card);
      border:1px solid var(--line);
      border-radius:24px;
      padding:18px;
      box-shadow:0 20px 80px rgba(0,0,0,.4);
    }
    .car-photo{
      width:100%;
      border-radius:18px;
      aspect-ratio:4/3;
      object-fit:cover;
      background:#222;
      margin-bottom:14px;
    }
    section{
      padding:24px 40px 60px;
    }
    .grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:18px;
    }
    .card{
      background:var(--card);
      border:1px solid var(--line);
      border-radius:18px;
      padding:20px;
    }
    .card h3{margin-top:0}
    .calc{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:18px;
      align-items:start;
    }
    label{display:block; margin:12px 0 6px; color:var(--muted)}
    input, select{
      width:100%;
      padding:14px;
      border-radius:12px;
      border:1px solid var(--line);
      background:#0f0f14;
      color:var(--text);
    }
    .result{
      font-size:34px;
      color:var(--gold);
      margin:10px 0;
      font-weight:800;
    }
    .muted{color:var(--muted); font-size:14px}
    .chips{display:flex; flex-wrap:wrap; gap:10px; margin-top:10px}
    .chip{
      padding:9px 12px;
      border-radius:999px;
      background:#1a1a23;
      border:1px solid var(--line);
      font-size:14px;
    }
    footer{
      padding:30px 40px 50px;
      border-top:1px solid var(--line);
      color:var(--muted);
    }
    @media (max-width: 900px){
      header,.calc,.grid{grid-template-columns:1fr}
      section,header,footer{padding-left:18px;padding-right:18px}
    }
  </style>
</head>
<body>
  <header>
    <div class="hero">
      <div class="badge">Van & Taxi Paris • Aéroports • Mise à disposition</div>
      <h1>Réservez votre van ou taxi haut de gamme sur Paris et toute l’Île-de-France.</h1>
      <p>
        Transferts vers CDG, Orly, Beauvais, gares, hôtels, événements, trajets longue distance
        et mise à disposition à l’heure ou à la journée.
      </p>
      <p>
        Service familles et groupes avec option siège bébé, rehausseur, bagages, accueil aéroport
        et véhicule premium type Mercedes Classe V noir.
      </p>
      <div class="cta-row">
        <a class="btn btn-primary" href="#reservation">Réserver maintenant</a>
        <a class="btn btn-secondary" href="#calculateur">Calculer le prix</a>
      </div>
    </div>

    <div class="visual">
      <img class="car-photo" src="https://images.unsplash.com/photo-1549399542-7e3f8b79f9f7?auto=format&fit=crop&w=1200&q=80" alt="Van noir premium pour transport de passagers">
      <div class="card">
        <strong>Mercedes Classe V noir</strong>
        <p class="muted">Confort, discrétion et espace pour les transferts privés et professionnels.</p>
      </div>
    </div>
  </header>

  <section class="grid">
    <div class="card">
      <h3>Transferts aéroports</h3>
      <p>Paris → CDG, Orly, Beauvais, Roissy, retour aéroport, accueil avec pancarte sur demande.</p>
    </div>
    <div class="card">
      <h3>Sièges enfants</h3>
      <p>Ajoute un siège bébé ou un rehausseur selon l’âge de l’enfant, sans complexité dans la réservation.</p>
    </div>
    <div class="card">
      <h3>Mise à disposition</h3>
      <p>Réserve un van avec chauffeur pour quelques heures, demi-journée, journée complète ou soirée.</p>
    </div>
  </section>

  <section id="calculateur" class="calc">
    <div class="card">
      <h2>Calculateur de tarif</h2>
      <label for="distance">Distance estimée (km)</label>
      <input id="distance" type="number" min="0" step="0.1" value="20">

      <label for="vehicule">Type de véhicule</label>
      <select id="vehicule">
        <option value="taxi">Taxi standard</option>
        <option value="van">Van Classe V</option>
      </select>

      <label for="siege">Option enfant</label>
      <select id="siege">
        <option value="0">Aucun</option>
        <option value="1">Siège bébé</option>
        <option value="2">Rehausseur</option>
        <option value="3">2 sièges bébé</option>
      </select>

      <label for="mise">Mise à disposition</label>
      <select id="mise">
        <option value="0">Non</option>
        <option value="35">1 heure</option>
        <option value="65">2 heures</option>
        <option value="120">Demi-journée</option>
      </select>

      <button class="btn btn-primary" style="margin-top:16px" onclick="calculer()">Calculer le prix</button>
    </div>

    <div class="card" id="reservation">
      <h2>Estimation</h2>
      <div class="result" id="prix">0 €</div>
      <p class="muted" id="detail"></p>
      <div class="chips">
        <span class="chip">Paris</span>
        <span class="chip">92</span>
        <span class="chip">93</span>
        <span class="chip">94</span>
        <span class="chip">95</span>
        <span class="chip">78</span>
        <span class="chip">CDG</span>
        <span class="chip">Orly</span>
      </div>
    </div>
  </section>

  <section class="grid">
    <div class="card">
      <h3>Réservation simple</h3>
      <p>Nom, téléphone, adresse de départ, destination, nombre de passagers et bagages, tout en quelques champs.</p>
    </div>
    <div class="card">
      <h3>Professionnel</h3>
      <p>Idéal pour hôtels, entreprises, mariages, séminaires, événements et transferts VIP.</p>
    </div>
    <div class="card">
      <h3>SEO local propre</h3>
      <p>Contenu clair, villes desservies, pages dédiées par trajet, données structurées et vitesse mobile optimale.</p>
    </div>
  </section>

  <footer>
    © 2026 - Réservation Van & Taxi Paris - Tous droits réservés.
  </footer>

  <script>
    function calculer(){
      const distance = parseFloat(document.getElementById('distance').value || 0);
      const vehicule = document.getElementById('vehicule').value;
      const siege = parseInt(document.getElementById('siege').value, 10);
      const mise = parseFloat(document.getElementById('mise').value || 0);

      const priseEnCharge = 15;
      const prixKm = 2.80;
      const supplementVehicule = vehicule === 'van' ? 12 : 0;
      const supplementSiege = siege === 0 ? 0 : (siege === 1 ? 8 : siege === 2 ? 5 : 15);

      const total = priseEnCharge + (distance * prixKm) + supplementVehicule + supplementSiege + mise;
      document.getElementById('prix').textContent = total.toFixed(2) + ' €';
      document.getElementById('detail').textContent =
        `Base: ${priseEnCharge} € + ${distance} km x ${prixKm} € + véhicule ${supplementVehicule} € + siège ${supplementSiege} € + mise à disposition ${mise} €`;
    }
    calculer();
  </script>
</body>
</html>


