

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PopularYoysTab from './PopularYoysTab';
import Slide1 from './Slide1.jsx/Slide1';
import Slide2 from './Slide1.jsx/Slide2';
import Slide3 from './Slide1.jsx/Slide3';
import Slide4 from './Slide1.jsx/Slide4';

const Slider = () => {
  return (
    
      <Swiper navigation={true}
      slidesPerView={1}
      loop={true}
      modules={[ Pagination, Navigation]}
      className="mySwiper relative md:h-[100vh] h-[80vh]">
      <SwiperSlide><Slide1></Slide1></SwiperSlide>
      <SwiperSlide><Slide2></Slide2></SwiperSlide>
      <SwiperSlide><Slide3></Slide3></SwiperSlide>
      <SwiperSlide><Slide4></Slide4></SwiperSlide>
    </Swiper>
    );
  };

export default Slider;




    



