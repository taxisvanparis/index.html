<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO INVISIBLE (Uniquement pour Google) -->
    <title>Van Paris Prestige | Réservation Van 95 92 78 | Sièges Bébé</title>
    <meta name="description" content="Transport privé en Van luxe. Sièges bébé et réhausseurs inclus. Service 24h/7j dans le 95, 92, 78 vers CDG et Orly.">
    <meta name="keywords" content="Uber Van, G7 Van, Allocab, Van 8 places Paris, Taxi 95, Taxi 92, Taxi 78, Van Aéroport, Siège bébé gratuit, Van avec Cosy, Chauffeur Privé famille, Van Disney, Navette Roissy">

    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        .hero-bg {
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                        url('https://images.unsplash.com/photo-1559297434-2d8a1e929ff7?auto=format&fit=crop&q=80&w=1000');
            background-size: cover; background-position: center;
        }
    </style>
</head>
<body class="bg-gray-50 font-sans text-gray-900">

    <nav class="bg-black text-white p-4 sticky top-0 z-50 border-b-2 border-yellow-500">
        <div class="container mx-auto flex justify-between items-center">
            <div class="leading-tight">
                <span class="text-xl font-black text-yellow-500 uppercase italic">Van Paris Prestige</span>
                <p class="text-[10px] text-gray-400">Transport Familial Haut de Gamme</p>
            </div>
            <a href="tel:+33600000000" class="bg-yellow-500 text-black px-4 py-2 rounded-md font-bold text-sm">📞 Appeler</a>
        </div>
    </nav>

    <header class="hero-bg py-16 text-center text-white px-4">
        <h1 class="text-2xl md:text-4xl font-extrabold mb-4 uppercase">Réservation Van avec Siège Bébé</h1>
        <p class="text-lg mb-6 text-yellow-400 font-bold italic">Équipements enfants & réhausseurs gratuits sur demande</p>
    </header>

    <section class="container mx-auto px-4 -mt-10 mb-8">
        <div class="max-w-xl mx-auto bg-white rounded-xl shadow-2xl p-6 border-t-4 border-yellow-500">
            <h2 class="text-sm font-bold mb-4 text-center uppercase text-gray-600">Calculateur de prix immédiat</h2>
            
            <div class="space-y-4">
                <div>
                    <label class="text-xs font-bold text-gray-400 uppercase">Distance du trajet (km)</label>
                    <input type="number" id="distance" placeholder="Ex: 15" 
                           class="w-full p-4 border-2 border-gray-100 rounded-xl bg-gray-50 focus:border-yellow-500 outline-none text-lg">
                </div>

                <div class="bg-black text-white p-5 rounded-xl text-center shadow-inner">
                    <p class="text-yellow-500 text-[10px] font-bold uppercase mb-1 text-center">Estimation du tarif TTC</p>
                    <div class="text-5xl font-black"><span id="totalPrice">15.00</span> €</div>
                    <p class="text-[9px] text-gray-500 mt-2 italic">Forfait approche 15€ + 2.80€ / km</p>
                </div>

                <a href="https://wa.me/33600000000?text=Bonjour, je souhaite réserver un Van avec siège bébé..." 
                   class="flex items-center justify-center w-full bg-green-600 text-white font-black py-4 rounded-xl text-lg shadow-lg">
                    <i class="fa-brands fa-whatsapp mr-3 text-2xl"></i> CONFIRMER PAR WHATSAPP
                </a>
            </div>
        </div>
    </section>

    <!-- ZONE DE RÉFÉRENCEMENT DISCRÈTE (Mots-clés cachés dans le texte) -->
    <section class="container mx-auto px-6 py-4 text-gray-400 text-[9px] leading-relaxed text-center opacity-40">
        <p>Expert en transport Van 95, Van 92, Van 78. Zones desservies : Argenteuil, Sarcelles, Cergy, Garges-lès-Gonesse, Franconville, Pontoise, Bezons, Ermont, Goussainville, Sannois, Taverny, Nanterre, Boulogne-Billancourt, Colombes, Asnières-sur-Seine, Rueil-Malmaison, Courbevoie, Neuilly-sur-Seine, Levallois-Perret, Versailles, Sartrouville, Mantes-la-Jolie, Saint-Germain-en-Laye, Poissy. Transfert Aéroport Charles de Gaulle, Orly, Beauvais, Gare de Lyon, Gare du Nord, Gare Montparnasse, Disneyland Paris, Parc Astérix. Van 7 places, Van 8 places avec chauffeur privé VTC.</p>
    </section>

    <footer class="bg-black text-white py-6 text-center mt-6">
        <p class="text-[10px] text-gray-600">© 2026 Van Paris Prestige - Transport IDF</p>
    </footer>

    <script>
        const distanceInput = document.getElementById('distance');
        const priceDisplay = document.getElementById('totalPrice');
        distanceInput.addEventListener('input', () => {
            const dist = parseFloat(distanceInput.value);
            if (!isNaN(dist) && dist > 0) {
                const total = 15 + (dist * 2.80);
                priceDisplay.innerText = total.toFixed(2);
            } else { priceDisplay.innerText = "15.00"; }
        });
    </script>
</body>
</html>

