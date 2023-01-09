import React from "react";
import styled from "styled-components";

const TrainerCard = ({ className, Trainer }) => {
  return (
    <article className={className}>
      <div className="imgCard">
      <img src={Trainer.Image} alt={Trainer.Name} />
      <div className="imgCountry">
      <img src={Trainer.Country} alt={Trainer.Name} />
      </div>
      </div>
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

  width: 85%;
  /* min-height: 100%; */
  /* padding: 20px; */
  margin: 0 auto;
  color: white;
  /* .imgCard{
    position:absolute;
  } */
  .imgCard > img {
    height: 220px;
    width: 220px;
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
  .imgCountry{
    position:relative;
    top:-50px;
    left:10px;
  }
  .imgCountry > img{
    width:40px;
  }
  .trainerData{
    width:100%;
    text-align:center;
  }
  h3 {
    font-size: 40px;
    margin: 20px 0;
    font-style: oblique;
    letter-spacing: 5px;
    line-height: 40px;
  }
  h4 {
    font-size: 20px;
    margin: 20px 0;
    font-style:italic;
    width:100%;
    border-bottom:2px solid white;
  }
  p{
    font-size: 18px;
    margin: 30px 0;
    letter-spacing: 1.5px;
  }
`;
