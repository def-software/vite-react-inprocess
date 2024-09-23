//import { useState } from 'react'
import reactLogo from './assets/react.svg';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
//import viteLogo from '/web.jpg'
import './App.css'
import './estilos/fondo.css'
import './estilos/estilos.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <div className='background'>
          <h1 className="animated zoomInDown" color='blue'>Página en construcción</h1>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Analytics/>
        <SpeedInsights/>
      </div>                           
      </>
      
  )
}

export default App
