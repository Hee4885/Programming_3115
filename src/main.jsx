import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import CounterApp from './CounterApp.jsx'
// import App from './App.jsx'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>,
)
