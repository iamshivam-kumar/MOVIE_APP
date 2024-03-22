import React from "react";
// imported swiper css
import "swiper/css";
import "./movieSwiper.css";
// imported swiper react Component
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const MovieSwiper = ({slides , slideChange}) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide._id}>
          <img src={slide.previewImg} alt="Preview Image" onClick={()=> slideChange(slide._id)}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSwiper;
