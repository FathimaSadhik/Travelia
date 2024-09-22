import React from 'react'
import BookingCss from './../Booking/Booking.module.css'
const Booking = () => {
  return (
    <div className={`${BookingCss.booking_wrapper} section`}>
    
    <h2>Explore Iconic Popular Destination
        <br/>With Expert Insides
    </h2>
    <button className={BookingCss.buttonBooking}>Book Advanture</button>
    </div>
    
)
}

export default Booking