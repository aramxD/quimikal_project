import React from "react";
import styled from "styled-components";

function NavBar({ className }) {
  return (
    <header className={className}>
      <nav>
        <li>
          <a href="#Hero">Inicio</a>
        </li>
        <li>
          <a href="#knowledgeRoute">Modulos</a>
        </li>
        <li>
          <a href="#trainers">Entrenadores</a>
        </li>
        <li>
          <a href="#gallery">Galeria</a>
        </li>
        <li>
          <a href="#methodology">Metodologia</a>
        </li>
      </nav>
    </header>
  );
}
export default styled(NavBar)`
  width: 100%;
  height: 80px;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid transparent;
  box-shadow: 1px 1px 10px 0 rgb(139, 132, 132, 0.4);
  position: sticky;
  top: 0;
  z-index: 10;
  transition: ease-in-out 0.5s;
  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80px;
  }

  a {
    text-decoration: none;
    margin: 0 10px;

    font-weight: 500;
    font-size: 20px;
  }
  li {
    list-style: none;
    margin: 0 30px;
    padding: 10px 0;
  }
  li:hover {
    border-bottom: 2px solid black;
  }

  @media (max-width: 600px) {
    display:none;
  }
  @media (max-width: 800px) {
    li {
     
    margin: 0 10px;
     
  }
  }
`;
