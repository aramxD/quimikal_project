import React from "react";
import styled from "styled-components";
 

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import gallery1 from "../assets/Galeria/Galeria 1.jpeg";
import gallery2 from "../assets/Galeria/Galeria 2.jpeg";
import gallery3 from "../assets/Galeria/Galeria 3.jpeg";
import gallery4 from "../assets/Galeria/Galeria 4.jpeg";
import gallery5 from "../assets/Galeria/Galeria 5.jpeg";
import gallery6 from "../assets/Galeria/Galeria 6.jpeg";
import gallery7 from "../assets/Galeria/Galeria 7.jpeg";

const galleryArray = [
  { id: 1, img: gallery1 },
  { id: 2, img: gallery2 },
  { id: 3, img: gallery3 },
  { id: 4, img: gallery4 },
  { id: 5, img: gallery5 },
  { id: 6, img: gallery6 },
  {id:7,
    img:gallery7,
    },
];

const Gallery = ({ className }) => {
  return (
    <section className={className}>
      <h2>Unete a nosotros</h2>

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
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {galleryArray.map((element) => (
          <SwiperSlide key={element.id}>
            <div className="imgGallery">
            <img src={element.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
     
  );
};

export default styled(Gallery)`
width:90vw;
max-width:800px;
margin: 50px auto;
color: white;
  h2 {
    margin: 30px 0 60px 0;
    border-top: solid 4px;
    border-bottom: solid 4px;
    padding: 20px 0;
  }
.imgGallery{
    width:320px;
    height:280px;
}
img{
    width:100%;
    height:100%;
    object-fit: cover;
    border-radius:20px;
}
  h1 {
    color: white;
  }
`;
