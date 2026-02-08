import Header from "./components/Header";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Header/>

      <main className="container">
        <Home/>
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