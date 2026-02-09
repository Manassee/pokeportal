import Card from "../components/Card";

function Home() {
  return (
    <>
      <section className="hero">
        <h2>Willkommen im PokéPortal</h2>
        <p>
          Wir bauen ein Portal mit React – Schritt für Schritt. Heute: Layout, Navigation und Cards.
        </p>
        <button className="btn" onClick={() => alert("Pokédex Seite folgt")}>Zum Pokédex</button>
      </section>

      <section className="grid">
        <Card
          title="News"
          text="Später zeigen wir hier Artikel, Highlights und Updates im Portal-Stil."
          onClick={() => alert("News kommt bald")}
        />
        <Card
          title="Pokédex"
          text="Suche, Filter, Pagination und Detailseiten – das wird unser Kernfeature."
          onClick={() => alert("Pokédex Seite folgt")}
        />
        <Card
          title="Features"
          text="Dark Mode, Settings, Favoriten und später echte Daten über eine API."
          onClick={() => alert("Features in Arbeit")}
        />
      </section>
    </>
  );
}

export default Home;