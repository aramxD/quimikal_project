import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './App.css'
import Welcome from './components/Welcome'
import Trainers from './components/Trainers'
import KnowledgeRoute from './components/KnowledgeRoute'
import Methodology from './components/Methodology'
import Testimonials from './components/Testimonials'
import Timer from './components/Timer'
import Footer from './components/Footer';
 
const initialOptions = {
  "client-id": "AZOcVqZIJ-DQDK76__TvAOLVxDSkSJeSn2ky9nkPL7XuFNs9TrAA2l4bWS-uZ6KXU2Q1dJFLkN_53u8y",
  currency: "USD",
  intent: "capture",
   };

function App() {
  

  return (
    <PayPalScriptProvider options={initialOptions}>
     

    <div className="App">
      <Welcome/>
      <KnowledgeRoute/>
       <Trainers/> 
      
      <Methodology/>
      <Testimonials/>
      <Timer/>
      <Footer/>
       
    </div>
    </PayPalScriptProvider>
  )
}

export default App
