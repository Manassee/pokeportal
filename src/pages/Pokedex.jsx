// =======================
// 1️⃣ IMPORTS
// =======================

import { useMemo, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { POKEMON } from "../data/pokemon";

function Pokedex() {

  // =======================
  // 2️⃣ STATE
  // =======================

  const [query, setQuery] = useState("");
  const [type, setType] = useState("Alle");
  const [sort, setSort] = useState("id-asc");

  // =======================
  // 3️⃣ TYPEN ERZEUGEN
  // =======================

  const types = useMemo(() => {
    const unique = new Set(POKEMON.map((p) => p.type));
    return ["Alle", ...Array.from(unique).sort()];
  }, []);

  // =======================
  // 4️⃣ FILTER + SORT
  // =======================

  const visiblePokemon = useMemo(() => {
    const q = query.trim().toLowerCase();

    // Suche
    let result = !q
      ? POKEMON
      : POKEMON.filter((p) =>
          p.name.toLowerCase().includes(q)
        );

    // Typ-Filter
    if (type !== "Alle") {
      result = result.filter((p) => p.type === type);
    }

    // Sortierung
    result = [...result]; // Kopie!

    switch (sort) {
      case "id-desc":
        result.sort((a, b) => b.id - a.id);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        result.sort((a, b) => a.id - b.id);
    }

    return result;

  }, [query, type, sort]);

  // =======================
  // 5️⃣ RETURN (UI)
  // =======================

  return (
    <section className="page">
      <h2>Pokédex</h2>

      {/* Suche */}
      <div className="searchbar">
        <input
          className="input"
          type="text"
          placeholder="Suche..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Filter + Sort */}
      <div className="controls">
        <select
          className="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          className="select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="id-asc">Nummer ↑</option>
          <option value="id-desc">Nummer ↓</option>
          <option value="name-asc">Name A → Z</option>
          <option value="name-desc">Name Z → A</option>
        </select>
      </div>

      {/* Keine Treffer */}
      {visiblePokemon.length === 0 && (
        <p className="muted">Keine Treffer.</p>
      )}

      {/* Grid */}
      <section className="grid">
        {visiblePokemon.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </section>
    </section>
  );
}

export default Pokedex;