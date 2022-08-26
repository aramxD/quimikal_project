import React from "react";
import styled from "styled-components";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const arrayTestimonials = [
  {
    id: 1,
    name: "juan castro",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit eos vitae",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 2,
    name: "maria sanchez",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit eos vitae",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  },
  {
    id: 3,
    name: "juan castro",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit eos vitae",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];
const Testimonials = ({ className }) => {
  return (
    <section className={className}>
      <div className="testimonyTitle">
        <h2>Testimonios de Exito</h2>
      </div>

      <div className="testimonyCards">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {arrayTestimonials.map((element) => {
            return (
              <SwiperSlide key={element.id}>
                <article>
                  <img src={element.img} alt="testimonio persona" />
                  <h4>{element.name}</h4>
                  <p>
                    <em>{element.content}</em>
                  </p>
                  <p>⭐⭐⭐⭐⭐</p>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default styled(Testimonials)`
width:95vw;
  margin: 20px 0;
  h2 {
    text-align: center;
  }

  .testimonyCards article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 15px auto;
  }

  .testimonyCards article img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
