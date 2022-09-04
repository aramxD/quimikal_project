import React from "react";
import styled from "styled-components";

const TrainerCard = ({ className, Trainer }) => {
  return (
    <article className={className}>
      <img src={Trainer.Image} alt={Trainer.Name} />
      <div className="trainerData">
        <h3>{Trainer.Name}</h3>
        <h4>{Trainer.Title}</h4>
        <p>{Trainer.Resume}</p>
      </div>
    </article>
  );
};

export default styled(TrainerCard)`
  display: flex;

  flex-direction: column;
  justify-content: center;
  flex: 1;

  align-items: center;

  width: 80%;
  /* min-height: 100%; */
  /* padding: 20px; */
  margin: 0 auto;
  color: white;
  img {
    height: 320px;
    width: 320px;
    border-radius: 10px;
    object-fit: cover;
    /* CARD */
    background-image: linear-gradient(0deg, #585858 0%, #ffffffa1 100%);
    /* box-shadow: 0 8px 12px 0 rgba(31, 38, 135, 0.37); */
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.752);
  }
  h3 {
    font-size: 30px;
    margin: 20px 0;
  }
  h4 {
    font-size: 25px;
    margin: 20px 0;
  }
`;
