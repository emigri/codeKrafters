

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../App.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import siteContent from '../SiteContent.json';
import { useState } from 'react'


function Slider(props) {
    
        return (
            
            <>
            <div className='mt-11 border  shadow hover:shadow-xl'>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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