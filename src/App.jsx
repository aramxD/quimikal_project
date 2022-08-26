import { useState } from 'react'
 
import './App.css'
import Welcome from './components/Welcome'
import Trainers from './components/Trainers'
import KnowledgeRoute from './components/KnowledgeRoute'


function App() {
  

  return (
    <div className="App">
      <Welcome/>
      <Trainers/> 
      <KnowledgeRoute/>
    </div>
  )
}

export default App
