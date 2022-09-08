import React from "react";
import styled from "styled-components";
import LogoJS from "../assets/logo_450x200_azul_trans.png";
const Footer = ({ className }) => {
  return (
    <section className={className}>
        <a href="https://www.juliosantacruz.dev" target="_blank"><img src={LogoJS} alt="" /></a>
      
      <p>TODOS LOS DERECHOS RESERVADOS 2022 QUIMIKAL ACADEMY</p>
    </section>
  );
};

export default styled(Footer)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  color: rgb(250, 250, 250);
  background-color: rgb(0, 0, 0);
  p {
    font-size: 12px;
  }
  img {
    width: 120px;
  }
`;
