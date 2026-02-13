import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

/*
  App ist:

der oberste UI-Container hält Layout + Seiten 👉 Du willst keine Logik hier, sondern:

  Layout
  Navigation
  Routing (später)

  Gute Regel
  App.jsx = Orchestrator, nicht Arbeiter
*/ 