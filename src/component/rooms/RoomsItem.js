import React, { useRef, useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Scrollbar } from "swiper";

function RoomsItem(props) {
  return (
    <div className='rooms-item col-12 col-md-4 mb-5 p-3 '>
      <div className='item-imgs col-12 '>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide className='w-100 swip'><img src={props.img_01} alt='img' className='w-100 img-s' /></SwiperSlide>
          <SwiperSlide className='w-100 swip'><img src={props.img_02} alt='img' className='w-100 img-s' /></SwiperSlide>
          <SwiperSlide className='w-100 swip'><img src={props.img_03} alt='img' className='w-100 img-s' /></SwiperSlide>
          <SwiperSlide className='w-100 swip'><img src={props.img_04} alt='img' className='w-100 img-s' /></SwiperSlide>
        </Swiper>
      </div>
      <div className='item-text col-12 text-start  pt-3 pb-3 shadow'>
        <h3 className='mb-1'>{props.title}</h3>
        <div className='irem-romm-prix mb-3'>
          <span>{props.prix}$/</span>Per Night
        </div>
        <ul>
          <li><i className='text-warning mx-2'><FaArrowCircleRight /></i>{props.script_1}</li>
          <li><i className='text-warning mx-2'><FaArrowCircleRight /></i>{props.script_2}</li>
          <li><i className='text-warning mx-2'><FaArrowCircleRight /></i>{props.script_3}</li>
        </ul>
        <p>{props.text} </p>
        
        <div className='text-center d-flex justify-content-between'>
          <button className='btn btn-info'>Book Now</button>
          <button className='btn btn-light border-dark'>More Details</button>
        </div>
      </div>
      </div>
    
  )
}
export default RoomsItem