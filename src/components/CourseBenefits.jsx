import React from "react";
import styled from "styled-components";

import benefitsImg from "../assets/Galeria/Galeria 3.jpeg";

const CourseBenefits = ({ className }) => {
  return (
    <section className={className}>
      <h2>Que obtendras con la Certificación</h2>
      <h3>Certifícate y comparte estos beneficios</h3>
      <div className="benefitsContent">
        <div className="benefitsImg">
          <img src={benefitsImg} alt="" />
        </div>
        <div className="benefitsList">
          <ol>
            <li>Visualizar y delimitar objetivos</li>
            <li>Facilitar la autonomía y el empoderamiento</li>
            <li>
              Aumento de la flexibilidad mental y mejora de la rigidez mental
            </li>
            <li>Fomenta la creatividad</li>
            <li>Mejora la manera de relacionarnos con los demás</li>
            <li>Mejora la comunicación</li>
            <li>Mejora la motivación y ayuda a identificar motivaciones</li>
            <li>Disminuye el estrés y la ansiedad</li>
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
  color: rgb(250, 250, 250);
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
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
  }
  .benefitsImg {
    width: 80%;
  }
  .benefitsImg img {
    width: 100%;
    border-radius:30px;
    /* background: #acacac; */
-webkit-box-shadow: 10px 10px 10px #404040, -10px -10px 10px #000000;
box-shadow: 10px 10px 10px #000000, -10px -10px 10px #474747;
  }
  .benefitsList {
    margin:30px 10px;
    width: 80%;
  }
  ol {
    text-align: left;
  }

  
  
  p {
    font-size: 12px;
  }
  img {
    width: 120px;
  }
`;
