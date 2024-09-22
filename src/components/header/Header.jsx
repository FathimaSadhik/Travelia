import React from 'react'
import headerCss from './../header/header.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import destinationImg1 from './../../assets/tour-01.png'
import destinationImg2 from './../../assets/tour-02.png'
import destinationImg3 from './../../assets/tour-03.png'
import destinationImg4 from './../../assets/tour-04.png'
import destinationImg5 from './../../assets/tour-05.png'
import destinationImg6 from './../../assets/tour-06.png'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const Header = () => {
  return (
   <div className={`${headerCss.header_wrapper} section`}  id="Home">
        <div className={headerCss.imageContainer}> 
        <h2>Explore The World ,<br/>
          One  Unforgottable  Journey</h2>
        </div>
      <Swiper 
      spaceBetween={30}
      slidesPerView={5}
      loop={true}
     autoplay={
      {
        delay:1500,
      }
     }
     breakpoints={
      {
        0:{
         slidesPerView:1, 
        },
        500:{
          slidesPerView:2,
        },
        768:{
          slidesPerView:3,
        },
        1024:{
          slidesPerView:4,
        },
        1200:{
          slidesPerView:5,
        }
      }
     }
      modules={[Autoplay]}
      
      className={headerCss.swiper}>
      <SwiperSlide>
        <div className={headerCss.destinationCard}>
        <img src={destinationImg1} alt="" />
    
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={headerCss.destinationCard}>
        <img src={destinationImg2} alt="" />
        
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={headerCss.destinationCard}>
        <img src={destinationImg3} alt="" />
        
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={headerCss.destinationCard}>
        <img src={destinationImg4} alt="" />
        
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={headerCss.destinationCard}>
        <img src={destinationImg5} alt="" />
        
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={headerCss.destinationCard}>
        <img src={destinationImg6} alt="" />
        
        </div>
      </SwiperSlide>
      </Swiper>

   </div>
  )
}

export default Header