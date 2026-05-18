import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './todolist.css'
// import './reset.css'
// import './index.css'

import TodoListApp from './TodoListApp'
import HomeApp from '././HomeApp.jsx'
// import CounterApp from './CounterApp.jsx'
// import App from './App.jsx'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeApp />
  </StrictMode>,
)
