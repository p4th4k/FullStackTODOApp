import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Modes available: demo; prod
let MODE = "DEMO";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App mode={MODE} />
  </React.StrictMode>,
)
