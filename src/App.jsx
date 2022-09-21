import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./App.css";
import Welcome from "./components/Welcome";
import Trainers from "./components/Trainers";
import KnowledgeRoute from "./components/KnowledgeRoute";
import Methodology from "./components/Methodology";
import Testimonials from "./components/Testimonials";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import Galery from "./components/Gallery";
import ProductValue from "./components/ProductValue";
import CTA from "./elements/CTA";
import CourseBenefits from "./components/CourseBenefits";
import FloatingWhatsApp from 'react-floating-whatsapp';


import whattsappAvatar from './assets/TrainerDiegoEspinosa2.png'



const initialOptions = {
  "client-id":
    "AZOcVqZIJ-DQDK76__TvAOLVxDSkSJeSn2ky9nkPL7XuFNs9TrAA2l4bWS-uZ6KXU2Q1dJFLkN_53u8y",
  currency: "USD",
  intent: "capture",
};

  //whattsApp Config
const phoneNumber = '526642171518'
const accountName = 'Quimikal Academy'
const statusMessage = 'Tiempo de respuesta: 15 min.'
const chatMessage = 'Hola 😃 \n como te puedo ayudar? ' 


function App() {



  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="App">
        <Welcome />
        <KnowledgeRoute />
        <Trainers />
        <Galery />
        <CTA/>
        <Methodology />
        {/* <Testimonials /> */}
        <CourseBenefits/>
        <ProductValue/>
        <Timer />
        <FloatingWhatsApp 
        phoneNumber={phoneNumber} 
        accountName={accountName} 
        avatar ={whattsappAvatar}
        statusMessage={statusMessage}
        chatMessage={chatMessage}/>
        <Footer />
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
