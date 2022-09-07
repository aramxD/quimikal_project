import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './App.css'
import Welcome from './components/Welcome'
import Trainers from './components/Trainers'
import KnowledgeRoute from './components/KnowledgeRoute'
import Methodology from './components/Methodology'
import Testimonials from './components/Testimonials'
import Timer from './components/Timer'
 
const initialOptions = {
  "client-id": "ARSWipJcIj-Y0bX5WwXTXuHuA08syrlGdexp6bQxwpuXOjXVlfWMEvBxBvGaDBtCiUt8TPryDP-85n4j",
  currency: "USD",
  intent: "capture",
   };

function App() {
  

  return (
    <PayPalScriptProvider options={initialOptions}>
     

    <div className="App">
      <Welcome/>
       <Trainers/> 
      <KnowledgeRoute/>
      <Methodology/>
      <Testimonials/>
      <Timer/>
       
    </div>
    </PayPalScriptProvider>
  )
}

export default App
