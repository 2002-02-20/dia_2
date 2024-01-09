import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Informacion from './components/Informacion/Informacion'

function App() {
  
  return (
    <>
    <div className="tittle">
      <p className="reliable">Reliable, efficient delivery</p>
      <p className="powered"><strong>Powered by Technology</strong></p>
      <p>Our Artificial Intelligence powered tools use millons of project data <br /></p>
      <p>points to ensure that your project is successful</p>
      </div>
      <Informacion/>
    </>
  )
}

export default App
