import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CTA from "../elements/CTA";
import { getRemainingTimeUntilMsTimestamp } from "../utils/countdownTimerUtils";

const defaultRemainingTime = {
  segundos: "00",
  minutos: "00",
  horas: "00",
  dias: "00",
};
const dateTimestampMs = 1667304000000
 
 

const Timer = ({ className }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalID = setInterval(() => {
       
      setRemainingTime(getRemainingTimeUntilMsTimestamp(dateTimestampMs));
      
    }, 1000);
    return () => clearInterval(intervalID);
  }, [dateTimestampMs]);

  

  return (
    <section className={className}>
      <div className="timer">
        <p>¿Estás preparad@ para tomar esta Oportunidad?</p>
        <p>¡TE ESPERAMOS!</p>
        <h3>¡NO TE QUEDES FUERA! <br/><br/>  - 50% de Descuento -</h3>
        

        {/* Este es el timer 
        <div className="countDownTimer">
          <span>{remainingTime.dias}</span>
          <span>días</span>
          <span>{remainingTime.horas}</span>
          <span>hrs</span>
          <span>{remainingTime.minutos}</span>
          <span>min</span>
          <span>{remainingTime.segundos}</span>
          <span>s</span>
        </div> */}
      </div>
      <div className="promo">
        <p>
        NO TE PIERDAS ESTA GRAN OPORTUNIDAD <br/>¡ INICIA TU PROCESO DE CERTIFICACIÓN!
        </p>
        <p className="precioPromo">
            $713.20 USD
        </p>
      </div>
      <CTA/>
    </section>
  );
};

export default styled(Timer)`
    width:90vw;
    max-width: 800px;
    margin: 30px auto;
    color:white;
    text-align:center;
    .timer p{
      font-size:20px;
      font-style:italic; margin: 10px 0;
    }
    .timer h3{
      font-size:30px;
      margin: 20px 0;
      color:rgb(190,21,34);
    }
  .countDownTimer {
    margin: 20px 0;
  }
   
  .countDownTimer span:nth-child(odd) {
    font-size: 30px;margin: 0  0 0 15px;
    font-weight: 600;
  }
  .countDownTimer span {
    font-size: 20px;
    
  }
  .promo p{
    font-style:italic;
  }
  .precioPromo{
    font-size:34px;
  }
`;
