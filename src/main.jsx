import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../public/assets/css/style.css'
import '../public/assets/js/script.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.render(<App />, document.getElementById("app"));

