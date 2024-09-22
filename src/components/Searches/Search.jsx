import React from 'react'
import searchCss from './../Searches/search.module.css'
const Search = () => {
  return (
    <div className={`${searchCss.search_wrapper} section`} id="Searches">
        <h2>Popular Searches</h2>
        <div className={searchCss.cards}>
            <div className={searchCss.card}>
            <i className="ri-search-line"></i>
            <h3>Domestic Trips <span>See America In a New Light</span></h3>
            </div>
            {/* second card */}
            <div className={searchCss.card}>
            <i className="ri-search-line"></i>
            <h3>Vacations in 14 Days <span>Limited Availability and Selling Fast</span></h3>
            </div>
            {/* 3 card */}
            <div className={searchCss.card}>
            <i className="ri-search-line"></i>
            <h3>Offer for Traveling Groups <span>Save When you 9+ Guests</span></h3>
            </div>
            {/* 4 cards */}
            <div className={searchCss.card}>
            <i className="ri-search-line"></i>
            <h3>Past Guest Benefits<span>Saving with Global Tour Rewards</span></h3>
            </div>
            {/*  cards5 */}
            <div className={searchCss.card}>
            <i className="ri-search-line"></i>
            <h3>Tour Under $2000 <span>Browse Our Value Vacations</span></h3>
            </div>
            {/* card 6 */}
            <div className={searchCss.card}>
            <i className="ri-search-line"></i>
            <h3>Tour Under $2000 <span>Browse Our Value Vacations</span></h3>
            </div>
        </div>
    </div>
  )
}

export default Search