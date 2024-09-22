import React from 'react'
import tripCss from './../Trips/Trip.module.css'
import trip01 from './../../assets/Trips01.jpg'
import trip02 from './../../assets/Trips02.jpg'
import trip03 from './../../assets/Trips03.jpg'
import trip04 from './../../assets/Trips04.jpg'
import trip05 from './../../assets/Trips05.jpg'
import trip06 from './../../assets/Trips06.jpg'
import trip07 from './../../assets/Trips07.jpg'
import trip08 from './../../assets/Trips08.jpg'

const Trips = () => {
    return (
        <div className={`${tripCss.trips_wrapper} section`} id="Trips">
            <h2>Popular Trips</h2>
            <div className={tripCss.cards}>
                {/* firstcard */}
                <div className={tripCss.card}>
                    <img  src={trip01} alt="" />
                    <div className={tripCss.TripContent}>
                        <div className={tripCss.rating}>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-fill"></i>
                        </div>
                        <h3>Australia Panorama</h3>
                        <div className={tripCss.tripDetails}>
                        <span><i className="ri-calendar-line">7 Days</i></span>
                        <span><i className="ri-map-pin-line">5 places</i></span>
                        <span><i className="ri-flag-line"> Australia</i></span>

                        </div>
                        <div className={tripCss.pricing}>
                            <span className={tripCss.price}>$1,200</span>
                        <button className={`${tripCss.book} ${tripCss.buttonTrip}`}>Book Now</button>
                        </div>
                    </div>
                </div>
                {/* second card */}
                <div className={tripCss.card}>
                    <img  src={trip02} alt="" />
                    <div className={tripCss.TripContent}>
                        <div className={tripCss.rating}>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-fill"></i>
                         <i className="ri-star-line"></i>
                        </div>
                        <h3>Best Of Spain</h3>
                        <div className={tripCss.tripDetails}>
                        <span><i className="ri-calendar-line">5 Days</i></span>
                        <span><i className="ri-map-pin-line">15 places</i></span>
                        <span><i className="ri-flag-line"> Spain</i></span>

                        </div>
                        <div className={tripCss.pricing}>
                            <span className={tripCss.price}>$1,800</span>
                        <button className={`${tripCss.book} ${tripCss.buttonTrip}`}>Book Now</button>
                        </div>
                    </div>
                </div>
        {/* 3 card */}
        <div className={tripCss.card}>
                    <img  src={trip03} alt="" />
                    <div className={tripCss.TripContent}>
                        <div className={tripCss.rating}>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-fill"></i>
                        </div>
                        <h3>Italy</h3>
                        <div className={tripCss.tripDetails}>
                        <span><i className="ri-calendar-line">10 Days</i></span>
                        <span><i className="ri-map-pin-line">10 places</i></span>
                        <span><i className="ri-flag-line">Italy</i></span>

                        </div>
                        <div className={tripCss.pricing}>
                            <span className={tripCss.price}>$2,500</span>
                        <button className={`${tripCss.book} ${tripCss.buttonTrip}`}>Book Now</button>
                        </div>
                    </div>
                </div>
                {/* 4 card */}
                <div className={tripCss.card}>
                    <img  src={trip04} alt="" />
                    <div className={tripCss.TripContent}>
                        <div className={tripCss.rating}>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-fill"></i>
                        </div>
                        <h3>Canyonlands</h3>
                        <div className={tripCss.tripDetails}>
                        <span><i className="ri-calendar-line">7 Days</i></span>
                        <span><i className="ri-map-pin-line">5 places</i></span>
                        <span><i className="ri-flag-line">Canyonlands</i></span>

                        </div>
                        <div className={tripCss.pricing}>
                            <span className={tripCss.price}>$2,200</span>
                        <button className={`${tripCss.book} ${tripCss.buttonTrip}`}>Book Now</button>
                        </div>
                    </div>
                </div>
                {/* 5 card */}
                <div className={tripCss.card}>
                    <img  src={trip05} alt="" />
                    <div className={tripCss.TripContent}>
                        <div className={tripCss.rating}>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-fill"></i>
                        </div>
                        <h3>India</h3>
                        <div className={tripCss.tripDetails}>
                        <span><i className="ri-calendar-line">10 Days</i></span>
                        <span><i className="ri-map-pin-line">15 places</i></span>
                        <span><i className="ri-flag-line">India</i></span>

                        </div>
                        <div className={tripCss.pricing}>
                            <span className={tripCss.price}>$2,200</span>
                        <button className={`${tripCss.book} ${tripCss.buttonTrip}`}>Book Now</button>
                        </div>
                    </div>
                </div>
                {/* 6 card */}
                <div className={tripCss.card}>
                    <img  src={trip06} alt="" />
                    <div className={tripCss.TripContent}>
                        <div className={tripCss.rating}>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-fill"></i>
                        </div>
                        <h3>France Discovery</h3>
                        <div className={tripCss.tripDetails}>
                        <span><i className="ri-calendar-line">12 Days</i></span>
                        <span><i className="ri-map-pin-line">8 places</i></span>
                        <span><i className="ri-flag-line">France</i></span>

                        </div>
                        <div className={tripCss.pricing}>
                            <span className={tripCss.price}>$3,200</span>
                        <button className={`${tripCss.book} ${tripCss.buttonTrip}`}>Book Now</button>
                        </div>
                    </div>
                </div>
                {/* 7 card */}
                <div className={tripCss.card}>
                    <img  src={trip07} alt="" />
                    <div className={tripCss.TripContent}>
                        <div className={tripCss.rating}>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-fill"></i>
                        </div>
                        <h3>Japan</h3>
                        <div className={tripCss.tripDetails}>
                        <span><i className="ri-calendar-line">12 Days</i></span>
                        <span><i className="ri-map-pin-line">18 places</i></span>
                        <span><i className="ri-flag-line">Japan</i></span>

                        </div>
                        <div className={tripCss.pricing}>
                            <span className={tripCss.price}>$2,800</span>
                        <button className={`${tripCss.book} ${tripCss.buttonTrip}`}>Book Now</button>
                        </div>
                    </div>
                </div>
                {/* 8 card */}
                <div className={tripCss.card}>
                    <img  src={trip08} alt="" />
                    <div className={tripCss.TripContent}>
                        <div className={tripCss.rating}>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-fill"></i>
                         <i className="ri-star-half-fill"></i>
                        </div>
                        <h3>Explore Bali 10-Day Tour</h3>
                        <div className={tripCss.tripDetails}>
                        <span><i className="ri-calendar-line">10 Days</i></span>
                        <span><i className="ri-map-pin-line">15 places</i></span>
                        <span><i className="ri-flag-line"> </i>Bali</span>

                        </div>
                        <div className={tripCss.pricing}>
                            <span className={tripCss.price}>$2,200</span>
                        <button className={`${tripCss.book} ${tripCss.buttonTrip}`}>Book Now</button>
                        </div>
                    </div>
                </div>
                {/* main cards close */}
            </div>

        </div>
    )
}

export default Trips