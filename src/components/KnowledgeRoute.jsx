import React from "react";
import styled from "styled-components";
import CTA from "../elements/CTA";

const KnowledgeSteps = [
  {
    id: 1,
    title: "Modulo 1",
    content:
      "Introducir al aprendiz al mundo del coaching y cómo éste se puede llevar a cabo en sala, a un grupo o individuo.",
    image:
      "https://images.unsplash.com/photo-1617113937231-7942715f868e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
  },
  {
    id: 2,
    title: "Modulo 2",
    content:
      "Identificar en sí mismo y en las demás (personas, grupos o          sociedades) cuáles son las heridas.  ",
    image:
      "https://images.unsplash.com/photo-1470506926202-05d3fca84c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    title: "Modulo 3",
    content:
      "Enseñar al aprendiz a llevar a cabo coaching tanto a la acción o a la emoción.   (www.icf.org)",
    image:
      "https://images.unsplash.com/photo-1502919280275-1bed9aca68ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const KnowledgeRoute = ({ className }) => {
  return (
    <section className={className}>
      <h2>Ruta de Aprendizaje</h2>

      {KnowledgeSteps.map((step) => (
        <article key={step.id}>
          <div className="articleContent">
            <h3>{step.title}</h3>
            <p>{step.content}</p>
          </div>
          <div className="articleImage">
            <img src={step.image} alt="" />
          </div>
        </article>
      ))}

      {/* <CTA /> */}
    </section>
  );
};

export default styled(KnowledgeRoute)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  color: white;
  width: 90vw;
  max-width: 800px;
  margin: 20px auto;
  article {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 200px;
    background-color: gray;
    padding: 10px;
    margin: 10px;
    border-radius: 15px;
  }
  article:nth-child(odd) {
    flex-direction: row-reverse;
  }
  article .articleContent {
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
    height: 100%;
    width: 50%;
    text-align: center;
  }
  article .articleContent h3 {
    font-size: 25px;
  }
  article .articleContent p {
    font-size: 18px;
  }
  article .articleImage {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 45%;
    height: 100%;
  }
  article img {
    width: 100%;
    border-radius:15px;

    @media (min-width: 600px) {
    width:auto;
    height:100%;
  }
  }
`;
