import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Routes>
    <App />
  </Routes>,
)
