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
const dateTimestampMs = 1664046000000;

const Timer = ({ className }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
       
  //     setRemainingTime(getRemainingTimeUntilMsTimestamp(dateTimestampMs));
      
  //   }, 1000);
  //   return () => clearInterval(intervalID);
  // }, [dateTimestampMs]);

  

  return (
    <section className={className}>
      <div className="timer">
        <p>¿Estás preparad@ para tu independencia económica?</p>
        <p>¡TE ESPERAMOS!</p>
        <h3>¡NO TE QUEDES FUERA!</h3>

        <div className="countDownTimer">
          <span>{remainingTime.dias}</span>
          <span>dias</span>
          <span>{remainingTime.horas}</span>
          <span>hrs</span>
          <span>{remainingTime.minutos}</span>
          <span>min</span>
          <span>{remainingTime.segundos}</span>
          <span>s</span>
        </div>
      </div>
      <div className="promo">
        <p>
        NO TE PIERDAS ESTA GRAN OPORTUNIDAD <br/>¡ INICIA TU PROCESO DE CERTIFICACION!
        </p>
        <p className="precioPromo">
            $600USD
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
  .countDownTimer {
    margin: 20px 0;
  }
  .countDownTimer span:nth-child(odd) {
    font-size: 30px;
    font-weight: 600;
  }
  .countDownTimer span {
    font-size: 20px;
  }
`;
