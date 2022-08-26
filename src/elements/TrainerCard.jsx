import React from "react";
import styled from "styled-components";

const TrainerCard = ({ className, Trainer }) => {
  return (
    <article className={className}>
      <img src={Trainer.Image} alt={Trainer.Name} />
      <div className="trainerData">
        <h3>{Trainer.Name}</h3>
        <p>{Trainer.Resume}</p>
      </div>
    </article>
  );
};

export default styled(TrainerCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  background-image: linear-gradient(120deg, #ffffff 0%, #bebebea2 100%);
  box-shadow: 0 8px 12px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.752);
  /* width: 80%; */
  /* min-height: 100%; */
  padding: 20px;
  margin: 15px;
  color: black;
  img {
    height: 250px;
    width: auto;
    border-radius: 10px;
    object-fit: contain;
  }
`;
