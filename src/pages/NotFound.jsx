import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page">
      <h2>404 – Seite nicht gefunden</h2>
      <p>Die URL existiert nicht. Geh zurück zur Startseite.</p>
      <Link className="btn" to="/">Zur Startseite</Link>
    </section>
  );
}

export default NotFound;