import React from "react";
import styled from "styled-components";

import benefitsImg from "../assets/Galeria/Galeria 3.jpeg";

const CourseBenefits = ({ className }) => {
  return (
    <section className={className}>
      <h2>Beneficios de la Certificacion</h2>
      <h3>Certificate y comparte estos beneficios</h3>
      <div className="benefitsContent">
        <div className="benefitsImg">
          <img src={benefitsImg} alt="" />
        </div>
        <div className="benefitsList">
          <ol>
            <li>Visualizar y delimitar objetivos</li>
            <li>Facilitar la autonomia y el empoderamiento</li>
            <li>
              Aumento de la flexibilidad mental y mejora de la rigidez mental
            </li>
            <li>Fomenta la creatividad</li>
            <li>Mejora la manera de relacionarnos con los demas</li>
            <li>Mejora la comunicacion</li>
            <li>Mejora la motivacion y ayuda a identificar motivaciones</li>
            <li>Disminuye el estres y la ansiedad</li>
            <li>Se busca el bienestar emocional</li>
            <li>Mejora el autoconocimiento</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default styled(CourseBenefits)`

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 90vw;
  max-width: 800px;
  margin: 0 auto;
  h2 {
    width: 100%;
    margin: 30px 0 10px 0;
    border-top: solid 4px;
    border-bottom: solid 4px;
    padding: 20px 0;
  }
  h3{
    margin: 20px 0;
  }
  .benefitsContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .benefitsImg {
    width: 100%;
  }
  .benefitsImg img {
    width: 100%;
  }
  .benefitsList {
    margin-left: 10px;
    width: 80%;
  }
  ol {
    text-align: left;
  }

  color: rgb(250, 250, 250);
  background-color: rgb(0, 0, 0);
  p {
    font-size: 12px;
  }
  img {
    width: 120px;
  }
`;
