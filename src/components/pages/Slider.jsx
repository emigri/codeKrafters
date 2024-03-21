// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

import siteContentData from '../SiteContent.json';
import { useState } from 'react'


function Slider(props) {
    
    // Initialise state of the Site Content Data json (single site content object)
    const [siteContent, setSiteContent] = useState(siteContentData);
        return (
            
            <>
            <div className='slider'>
              <Swiper
                pagination={{
                  type: 'fraction',
                }}
                autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                <img src={props.slider_image1}></img>
                <div className='slidertext'>
                  <h1>{siteContent.slider_banner1}</h1>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <img src={props.slider_image2}></img>
                <div className='slidertext'>
                  <h1>{siteContent.slider_banner2}</h1>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <img src={props.slider_image3}></img>
                <div className='slidertext'>
                  <h1>{siteContent.slider_banner3}</h1>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <img src={props.slider_image4}></img>
                <div className='slidertext'>
                  <h1>{siteContent.slider_banner4}</h1>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={props.slider_image5}></img>
                <div className='slidertext'>
                  <h1>{siteContent.slider_banner5}</h1>
                </div>
                  </SwiperSlide>
                <SwiperSlide>
                  <img src={props.slider_image6}></img>
                <div className='slidertext'>
                  <h1>{siteContent.slider_banner6}</h1>
                </div>
                </SwiperSlide>
              </Swiper>
            </div>
    </>
        )
    }

    export default Slider;