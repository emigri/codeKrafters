

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

import siteContent from '../SiteContent.json';
import { useState } from 'react'


function Slider(props) {
    
        return (
            
            <>
            <div className='mt-11 border  shadow hover:shadow-xl'>
              <div className='p-3'>
              <h1>sample Product Catalogue</h1>
              </div>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={props.slider_image1}></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={props.slider_image2}></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={props.slider_image3}></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={props.slider_image4}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.slider_image5}></img>
          </SwiperSlide>
        <SwiperSlide>
          <img src={props.slider_image6}></img>
          </SwiperSlide>
      </Swiper>
      </div>
    </>
        )
    }

    export default Slider;