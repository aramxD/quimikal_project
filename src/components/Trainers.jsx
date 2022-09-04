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
import FotoDiego from "../assets/TrainerDiegoEspinosa2.png";
import FotoMariano from "../assets/TrainerMarianoShapovaloff.png";

const TrainersTeam = [
  {
    id: 1,
    Name: "Alex Suarez",
    Image: FotoAlex,
    Title: "Entrenador de potencial humano",
    Resume: `Entrenador y facilitador de procesos transformacionales y coach profesional. 
    Con 8 años de experiencia en el mundo del desarrollo integral y más de 100 talleres impartidos en varios países como Ecuador, Colombia Perú y México`,
  },
  {
    id: 2,
    Name: "Diego Espinosa",
    Image: FotoDiego,
    Title: "Entrenador de potencial humano",
    Resume: "Master en coaching directivo y liderazgo, coach profesional en método points of new con más de 500 horas de capacitación en desarrollo humano, coordinador de programa de liderazgo en empresas internacionales, y 8 años de experiencia en transformación",
  },
  {
    id: 3,
    Name: "Mariano Schapovaloff",
    Image: FotoMariano,
    Title: "Entrenador de potencial humano",
    Resume: "Mentor y master en pnl, certificado en coaching ontológico, deportivo, ejecutivo, shadow coaching, especialista en desarrollo personal y liderazgo, entrenador de habilidades blandas, conferencista internacional, más de 2500 horas como coach, 15 años de experiencia.",
  },
];

const Trainers = ({ className }) => {
  return (
    <section id="trainers" className={className}>
      

      <div className="trainersList">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {TrainersTeam.map((Trainer) => (
            <SwiperSlide key={Trainer.id}>
              {" "}
              <TrainerCard Trainer={Trainer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr/>
      <h2>Entrenadores</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ullam amet quidem officia dolorem tenetur voluptate ducimus necessitatibus optio, ab perferendis laboriosam fugiat, repellendus alias! Assumenda alias doloribus fuga vero.</p>
    </section>
  );
};

export default styled(Trainers)`
  padding: 40px 0;
  /* background-color:black; */
  height: 100%;
  width: 100vw;
  max-width: 800px;
  margin: 0 auto;
  color:white;
  #trainers {
    width: 100vw;
  }
  .trainersList {
    display: flex;
    /* height:800px; */
  }
  h2 {
    padding: 10px 0;
  }
`;
