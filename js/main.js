// ═══════════════════════════════════════════
// SCHRITT 1: Ein einzelnes Pokémon laden
// ═══════════════════════════════════════════

// async = diese FUnktionen enthält await- Aufrufe (wie async Task in C#)
async function loadPokemon(id) {

    // fetch = HTTP-Request an die API
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    // .json() = Antwort als JSON parsen - wie JsonSerialize in C#
    const pokemon = await response.json();

    // Daten aus dem JSON-Objekt extrahieren
    const nummer = String(pokemon.id).padStart(3, '0'); // ID mit führenden Nullen
    const name = pokemon.name;
    const bild = pokemon.sprites.other.showdown.front_default; // Bild-URL
    const typen = pokemon .types.map(t => t.type.name);
    
    // HTML-Elemente erstellen
    const karteHtml = `
        <div class="pokemon-karte">
           <div class="karte-header">
                <span class="karte-nummer">#${nummer}</span>
            </div>
            <div class="karte-bild-bereich">
                <img src="${bild}" alt="${name}">
            </div>
            <div class="karte-infos">
                <div class="karten-typen">
                   ${typen.map(typ => `<span class="typ-badge typ-${typ}">${typ}</span>`).join('')}
                </div>
            </div>
        </div>

    `;
    const gird = document.querySelector('.karten-grid');
    gird.innerHTML += karteHtml;
}

// Funktion aufrufen mit Lucario (ID 448)
loadPokemon(448);