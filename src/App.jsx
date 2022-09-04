import { useState } from 'react'
 
import './App.css'
import Welcome from './components/Welcome'
import Trainers from './components/Trainers'
import KnowledgeRoute from './components/KnowledgeRoute'
import Methodology from './components/Methodology'
import Testimonials from './components/Testimonials'
import Timer from './components/Timer'
import Payment from './elements/Payment'


function App() {
  

  return (
    <div className="App">
      <Welcome/>
      {/* <Payment/> */}
      <Trainers/> 
      <KnowledgeRoute/>
      <Methodology/>
      <Testimonials/>
      <Timer/>
       
    </div>
  )
}

export default App
