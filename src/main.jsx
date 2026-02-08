import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/base.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />                  {'// hier wird <App/> gerendert'}
  </StrictMode>,
)


/* Diese Datei ist der Startpunkt von React 
main.jsx startet React
App.jsx ist dein UI-Wurzelknoten */

