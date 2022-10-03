import React from "react";
import styled from "styled-components";
import quimikalLogo from "../assets/logo full p.png";

const Welcome = ({ className }) => {
  return (
    <section className={className}>
      <div className="imgHero">
        <h1>Certificación de Coaching</h1>
        <p>by</p>
        <img src={quimikalLogo} alt="" />
      </div>
      <Hero>
        <div className="contentHero">
          <p>
            Desde hace muchos años, el coaching y el mentoring se han convertido
            en las opciones preferidas por millones de personas para dar saltos
            de calidad en sus vidas personales y profesionales.
            <br />
            En las épocas de crisis es una de las actividades de crecimiento
            exponencial; y se augura que, en la transformación actual y la
            aceleración digital, sea uno de los sectores con mayor relevancia.
            Quienes nos dedicamos a esta actividad en forma profesional
            observamos una mayor demanda en épocas de incertidumbre. (fuente
            infobae.com)
          </p>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0j_PVcZzoE4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Hero>
    </section>
  );
};

const Hero = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contentHero {
    width: 100%;
  }
  p {
    margin: 15px 0;
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.568);
    border-radius: 35px;
    padding: 15px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  p:nth-child(2) {
    padding: 0 20px;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1.2px;
  }
  iframe {
    margin: 10px;
    width: 100%;
  }
  @media (min-width: 800px) {
    flex-direction: row;
    .contentHero {
      width: 53%;
    }
    iframe {
      margin: 10px;
      width: 45%;
    }
    p {
      width: 100%;
      font-size: 18px;
    }
    p:nth-child(2) {
      font-size: 18px;
    }
  }
`;

export default styled(Welcome)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1250px;
  height: auto;
  padding: 0 5vw;

  text-align: center;
  font-style: italic;
  align-items: center;
  margin: 0 auto;

  color: black;
  background-image: url("https://images.unsplash.com/photo-1627931539006-d5c4677e05ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  z-index: 2;

  .imgHero {
    max-width: 800px;
    width: 100%;
    height: auto;
    margin: 30px 0 10px 0;
    background-color: rgba(255, 255, 255, 0.816);
    border-radius: 35px;
    padding: 10px;
  }
  h1 {
    font-size: 40px;
  }
  img {
    padding: 0;
    width: 100%;
  }
  @media (min-width: 600px) {
    img {
      width: 70%;
    }
  }
  @media (min-width: 800px) {
    img {
      width: 40%;
    }
  }
`;
