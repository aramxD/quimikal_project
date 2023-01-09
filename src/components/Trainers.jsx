import React from "react";
import styled from "styled-components";
import TrainerCard from "../elements/TrainerCard";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import FotoAlex from "../assets/TrainerAlexSuarez2.png";
import N_Alex from "../assets/T_Colombia.png"
import FotoDiego from "../assets/TrainerDiegoEspinosa2.png";
import N_Diego from "../assets/T_Ecuador.png"
import FotoMariano from "../assets/TrainerMarianoShapovaloff.png";
import N_Mariano from "../assets/T_Argentina.png"

const TrainersTeam = [
  {
    id: 1,
    Name: "Diego Espinosa",
    Image: FotoDiego,
    Country:N_Diego,
    Title: "Entrenador de potencial humano",
    Resume: "Master en coaching directivo y liderazgo, coach profesional con más de 500 horas de capacitación en desarrollo humano, coordinador de programa de liderazgo en empresas internacionales, y 8 años de experiencia en transformación.",
  },
  {
    id: 2,
    Name: "Alex Suárez",
    Image: FotoAlex,
    Country:N_Alex,
    Title: "Entrenador de potencial humano",
    Resume: `Entrenador y facilitador de procesos transformacionales y coach profesional. 
    Con 8 años de experiencia en el mundo del desarrollo integral y más de 100 talleres impartidos en varios países como Ecuador, Colombia, Perú y México.`,
  },
  
 
];

const Trainers = ({ className }) => {
  return (
    <section id="trainers" className={className} >
      <h2>Entrenadores</h2>

      <div className="trainersList">
        <Swiper
        breakpoints={{
          // when window width is >= 640px
          320: {
            width: 320,
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {TrainersTeam.map((Trainer) => (
            <SwiperSlide key={Trainer.id}>
              
              <TrainerCard Trainer={Trainer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      
      
    </section>
  );
};

export default styled(Trainers)`
/* background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;
 background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%); */

  /* padding: 40px 0; */
  /* background-color:black; */
  height: 100%;
  width: 100vw;
  max-width: 800px;
  margin: 0 auto;
  color:white;
  h2{
    margin: 10px 0 30px 0;
    border-top: solid 4px;
    border-bottom: solid 4px;
    padding: 20px 0 10px;
    width:100%;
  }
  #trainers {
    width: 100vw;
  }
  .trainersList {
    display: flex;
    /* height:800px; */
  } 
`;
