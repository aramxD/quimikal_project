import React from "react";
import styled from "styled-components";
import TrainerCard from "../elements/TrainerCard";


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import FotoAlex from "../assets/TrainerAlexSuarez.png";
import FotoDiego from "../assets/TrainerDiegoEspinosa.png";
import FotoMariano from "../assets/TrainerMarianoShapovaloff.png";

const TrainersTeam = [
  {
    id: 1,
    Name: "Alex Suarez",
    Image: FotoAlex,
    Resume: "soy una membraza o titulo",
  },
  {
    id: 2,
    Name: "Diego Espinosa",
    Image: FotoDiego,
    Resume: "soy una membraza o titulo",
  },
  {
    id: 3,
    Name: "Mariano Shapovaloff",
    Image: FotoMariano,
    Resume: "soy una membraza o titulo",
  },
];

const Trainers = ({ className }) => {
  return (
    <section id="trainers" className={className}>
      <h2>Entrenadores</h2>

        <div className="trainersList">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={1.2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
        {TrainersTeam.map((Trainer) => (
       <SwiperSlide key={Trainer.id}> <TrainerCard Trainer={Trainer}  /></SwiperSlide>
      ))}

      
      
      
    </Swiper>

</div>


      
    </section>
  );
};

export default styled(Trainers)`
  background-image: linear-gradient(120deg, #00dc6a 0%, #d8df1e 100%);
  height: 100%;
  width: 100vw;
  #trainers{
    width: 100vw;
  }  
  .trainersList{
        display:flex;
        /* height:800px; */
    }
  h2 {
    margin: 20px 0;
  }
`;
