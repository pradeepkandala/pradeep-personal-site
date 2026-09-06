import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Enable Web Analytics in Vercel before deploying. Skip local development.
if (import.meta.env.PROD) {
  window.va = window.va || function (...args) {
    (window.vaq = window.vaq || []).push(args)
  }
  const analyticsScript = document.createElement('script')
  analyticsScript.src = '/_vercel/insights/script.js'
  analyticsScript.defer = true
  document.head.appendChild(analyticsScript)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)