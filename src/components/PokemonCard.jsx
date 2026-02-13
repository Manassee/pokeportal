function PokemonCard({ pokemon }) {
  return (
    <article className="card">
      <h3 className="card-title">
        #{pokemon.id} – {pokemon.name}
      </h3>
      <p className="card-text">Typ: {pokemon.type}</p>
    </article>
  );
}

export default PokemonCard;