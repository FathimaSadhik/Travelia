import React from 'react'
import customCss from './../Customer/customer.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profile1 from './../../assets/Customer1.jpg'
import profile2 from './../../assets/Customer-03.jpg'
import profile3 from './../../assets/Customer-07.jpg'

import 'swiper/css'
import { Autoplay } from 'swiper/modules'
const CustomerRating = () => {
  return (
    <div className={`${customCss.customer_wrapper} section`} id="About">
        <h2 style={{textAlign:'center', fontWeight:'bold' ,marginTop:'20px'}}>Exceptional Jounrney's with  Travelia.</h2>
    <Swiper spaceBetween={30}
    slidesPerView={3}
    loop={true}
    breakpoints={{
      0:{
        slidesPerView:1
      },
        768:{
        slidesPerView:2
      },
      1200:{
        slidesPerView:3
      },
    }}
    autoplay={{
      delay:1500,
    }}
    modules={[Autoplay]}
    className={customCss.swiper}>
    <SwiperSlide>
        <div className={customCss.customer_Container}>
    <div className={customCss.profile}>
    <img src={profile1} alt="" />
    <div className={customCss.detail}>
    <span>John Doe</span>
    <div className={customCss.ratings}>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-half-fill"></i>
    <i className="ri-star-line"></i>
    
    </div>
    </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  necessitatibus id, sint quaerat praesentium dolores!</p>
        </div>
    </SwiperSlide>
    {/* 2 slide */}
    <SwiperSlide>
        <div className={customCss.customer_Container}>
    <div className={customCss.profile}>
    <img src={profile2} alt="" />
    <div className={customCss.detail}>
    <span>Sanaya</span>
    <div className={customCss.ratings}>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-half-fill"></i>
    <i className="ri-star-line"></i>
    
    </div>
    </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. s necessitatibus id, sint quaerat praesentium dolores!</p>
        </div>
    </SwiperSlide>
    {/* 4slide */}
    <SwiperSlide>
        <div className={customCss.customer_Container}>
    <div className={customCss.profile}>
    <img src={profile1} alt="" />
    <div className={customCss.detail}>
    <span>John Doe</span>
    <div className={customCss.ratings}>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-half-fill"></i>
    <i className="ri-star-line"></i>
    
    </div>
    </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. necessitatibus id, sint quaerat praesentium dolores!</p>
        </div>
    </SwiperSlide>
    {/* 3slide */}
    <SwiperSlide>
        <div className={customCss.customer_Container}>
    <div className={customCss.profile}>
    <img src={profile3} alt="" />
    {/* <span>Mariyah</span> */}
    <div className={customCss.detail}>
    <span>Mariyah</span>
    <div className={customCss.ratings}>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-fill"></i>
    <i className="ri-star-half-fill"></i>
    <i className="ri-star-line"></i>
    
    </div>
    </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. necessitatibus id, sint quaerat praesentium dolores!</p>
        </div>
    </SwiperSlide>
    
    </Swiper>
    </div>
  )
}

export default CustomerRating