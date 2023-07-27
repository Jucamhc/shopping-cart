import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarApp } from './CarApp'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarApp />
    </React.StrictMode>
  </BrowserRouter>
)
