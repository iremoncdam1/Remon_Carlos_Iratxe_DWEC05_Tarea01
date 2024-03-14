import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import './index.css' 

//En el elemento con "id = root" del html añadimos nuestro elemento App
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
  </>
)
