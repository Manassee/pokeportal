import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/base.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />                  
  </StrictMode>,
)


/* Diese Datei ist der Startpunkt von React 
main.jsx startet React
App.jsx ist dein UI-Wurzelknoten

Warum das wichtig ist

React lädt kein CSS automatisch

Du entscheidest bewusst:

globales CSS

komponentenspezifisches CSS (später)

👉 Du behältst Kontrolle über Styling


*/

