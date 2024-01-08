/* eslint-disable react/prop-types */
// import React from 'react'

// import img from "../assets/hurry-up.webp";
// import img2 from "../assets/big-diwali-sale.webp";
// import img3 from "../assets/realme.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Crousel = ({img,img2,img3}) => {
    
   
    return (
      <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide><img style={{width:'100%'}} src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img style={{width:'100%'}} src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img style={{width:'100%'}} src={img3} alt="" /></SwiperSlide>
        
      </Swiper>
      </>
        )
}

export default Crousel
