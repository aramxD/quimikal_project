import React from "react";
import styled from "styled-components";
import CTA from "../elements/CTA";

const KnowledgeSteps = [
  {
    id: 1,
    title: "Módulo 1",
    content:
      "Introducción al mundo del coaching y cómo éste se puede llevar a cabo en sala, o uno a uno.",
    image:
      "https://images.unsplash.com/photo-1617113937231-7942715f868e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
  },
  {
    id: 2,
    title: "Módulo 2",
    content: "Coaching corporal desde la emoción, coaching a la acción y desarrollo de modelos de equipo (líder presente)",
    image:
      "https://images.unsplash.com/photo-1470506926202-05d3fca84c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    title: "Módulo 3",
    content:
      "Como a llevar a cabo sesiones de coaching tanto a la acción como a la emoción según ICF. (www.icf.org)",
    image:
      "https://images.unsplash.com/photo-1502919280275-1bed9aca68ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const KnowledgeRoute = ({ className }) => {
  return (
    <section className={className} id='knowledgeRoute'>
      <h2>Ruta de Aprendizaje</h2>
      <div className="KnowledgeSteps">
        {KnowledgeSteps.map((step) => (
          <KnowledgeCard key={step.id}>
            <div className="articleContent">
              <h3>{step.title}</h3>
              <p>{step.content}</p>
            </div>
            <div className="articleImage">
              <img src={step.image} alt="" />
            </div>
          </KnowledgeCard>
        ))}
      </div>
      {/* <CTA /> */}
    </section>
  );
};

const KnowledgeCard = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  height: 200px;
  background-color: gray;
  padding: 20px 10px;
  margin: 20px 0;
  border-radius: 15px;

  .articleContent {
    width: 50%;
  }
  .articleContent h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .articleContent p {
    font-size: 18px;
  }
  .articleImage {
    width: 50%;
  }
  .articleImage img {
    width: 100%;
    border-radius: 10px;
  }
  @media (min-width: 600px) {
    flex-direction: column;
    width: 48%;
    height: 330px;

    .articleContent {
      width: 100%;
    }
    .articleImage {
      width: 100%;
    }
  }
  @media (min-width: 800px) {
    width: 32%;

    .articleContent {
      width: 100%;
    }
    .articleImage {
      width: 100%;
    }
    p{
      font-size:18px;
    }
  }
`;

export default styled(KnowledgeRoute)`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  align-items: center;
  color: white;
  width: 90vw;
  max-width: 800px;
  margin: 20px auto;

  h2 {
    margin: 10px 0 30px 0;
    border-top: solid 4px;
    border-bottom: solid 4px;
    padding: 20px 0;
    width: 100%;
  }
  .KnowledgeSteps {
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
      flex-direction: row;
      flex-wrap: wrap;

      justify-content: space-around;
    }
  }
  /* 
  
  
  article {
    
    @media (min-width: 600px) {
      height: 350px;
      flex-direction: column;
      width: 260px;

      justify-content: center;
    }
  }
  
  
  
  article .articleImage {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 45%;
    height: 100%;

    @media (min-width: 600px) {
      height: 200px;
    }
  }
  article img {
    width: 100%;
    border-radius: 15px;

    @media (min-width: 600px) {
      width: auto;
      height: 100%;
    }
  } */
`;
