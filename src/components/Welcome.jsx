import React from "react";
import styled from "styled-components";
import quimikalLogo from '../assets/logo full p.png'


const Welcome = ({className})=>{

    return(
        <section className={className}>
            <img src={quimikalLogo} alt="" />
            <p>
            Desde hace muchos años, el coaching y el mentoring se han convertido en las opciones preferidas por millones de personas para dar saltos de calidad en sus vidas personales y profesionales.
        </p>
        <p>
          <u
            >En las épocas de crisis es una de las actividades de crecimiento exponencial; y se augura que, en la transformación actual y la aceleración digital, sea uno de los sectores con mayor relevancia. Quienes nos dedicamos a esta actividad en forma profesional observamos una mayor demanda en épocas de incertidumbre.    (fuente infobae.com)
          </u>
        </p>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/aD8H6glSERY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        
        </section>
    )
}

export default styled(Welcome)`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 800px;
    text-align: center;
    font-style:italic;
    align-items: center;
    margin: 20px auto;
    
    color:white;

    img{
        margin: 30px 0 10px 0;
        padding: 10px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.816);
        border-radius: 45px;
    }
    p{
        margin: 15px 0;
        font-size: 20px;
    }
    p:nth-child(2){
        padding: 0 20px;
    font-weight: 600;
    font-size: 20px;
    }
    iframe{
    margin: 10px;
    width: 100%;
}
`