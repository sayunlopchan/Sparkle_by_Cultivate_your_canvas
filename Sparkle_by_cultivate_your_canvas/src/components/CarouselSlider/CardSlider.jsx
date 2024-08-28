import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const CardSlider = () => {
  const cardData = [
    {
      image: "",
      title: "lorem lorem lorem",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      image: "",
      title: "lorem lorem lorem",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      image: "",
      title: "lorem lorem lorem",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      image: "",
      title: "lorem lorem lorem",
      description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
  ];
  return <div className="w-full">
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >{
        cardData.map((item, idx) => (
          <SwiperSlide key={idx}>
            hello
          </SwiperSlide>
        ))
      }
    </Swiper>
  </div>;
};

export default CardSlider;
