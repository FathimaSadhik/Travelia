import React from 'react'
import footerCss from './../Footer/Footer.module.css'
const Footer = () => {
  return (
    <div className={`${footerCss.footer_wrapper} section`}>
      <div className={footerCss.top_content}>
        <div className={footerCss.logo}>
    <a href="#">Travelia</a>
        </div>
        <div className={footerCss.social}>
    <i className="ri-facebook-line"></i>
    <i className="ri-instagram-line"></i>
    <i className="ri-Twitter-x-line"></i>
    <i className="ri-youtube-line"></i>
        </div>
        {/* top content */}
         </div>
         <div className={footerCss.bottom_content}>
    <div className={footerCss.footerLinks}>
            <h3>About Travelia</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our History</a></li>
               <li><a href="#">Reviews</a></li>
               <li><a href="#">Destinations</a></li>
               <li><a href="#">Careers</a></li>
            </ul>
    </div>
    {/* 2destination */}
    <div className={footerCss.footerLinks}>
            <h3>Destinations</h3>
            <ul>
              <li><a href="#">USA</a></li>
              <li><a href="#">Asia</a></li>
               <li><a href="#">Europe</a></li>
               <li><a href="#">Africa</a></li>
               <li><a href="#">Latin America</a></li>
            </ul>
    </div>
    {/* support */}
    <div className={footerCss.footerLinks}>
            <h3>Support</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
               <li><a href="#">Request a Quote</a></li>
               <li><a href="#">Booking conditions</a></li>
               <li><a href="#">Recommendations</a></li>
            </ul>
    </div>
    {/* newsletter */}
    <div className={footerCss.footerLinks}>
            <h3>Our NewsLetter</h3>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt sapiente veniam consectetur porro possimus earum expedita, ipsam sit veritatis ipsa 
           </p>
           <div className={footerCss.inputWrapper}>
    <input type="email" placeholder='Enter your email' />
    <button className={footerCss.footButton}>Subscribe</button>
           </div>
    </div>


          {/* bottom  */}

         </div>

    </div>
  )
}

export default Footer 