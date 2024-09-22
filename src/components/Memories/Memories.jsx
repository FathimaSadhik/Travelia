import React from 'react'
import memoriesCss from './../Memories/memory.module.css'
import MemoriesImg1 from './../../assets/travelport1.jpg'
import MemoriesImg2 from './../../assets/travelport2.jpg'
import MemoriesImg3 from './../../assets/travelport4.jpg'
import MemoriesImg4 from './../../assets/travelport3.jpg'
import MemoriesImg5 from './../../assets/travelport5.jpg'
import MemoriesImg6 from './../../assets/travelport6.jpg'
import MemoriesImg7 from './../../assets/travelport7.jpg'
const Memories = () => {
    return (
        <div className={`${memoriesCss.memories_wrapper} section`}>
            <div className={memoriesCss.memoriesCard}>
                <img src={MemoriesImg1} alt="Memory-img" />
                <div className={memoriesCss.content}>
                    <h3>Small Groups Depurtures </h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCss.memoriesCard}>
                <img src={MemoriesImg2} alt="Memory-img" />
                <div className={memoriesCss.content}>
                    <h3>Affordable Dreams</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCss.memoriesCard}>
                <img src={MemoriesImg3} alt="Memory-img" />
                <div className={memoriesCss.content}>
                    <h3>Undiscovers Tours</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCss.memoriesCard}>
                <img src={MemoriesImg4} alt="Memory-img" />
                <div className={memoriesCss.content}>
                    <h3>Let Our Experts Pan<br/>
                    Your 2024 Journey</h3>
                    <button className={memoriesCss.buttonMemory}>ViewTours</button>
                </div>
            </div>
            <div className={memoriesCss.memoriesCard}>
                <img src={MemoriesImg5} alt="Memory-img" />
                <div className={memoriesCss.content}>
                    <h3>Religious Tours</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCss.memoriesCard}>
                <img src={MemoriesImg6} alt="Memory-img" />
                <div className={memoriesCss.content}>
                    <h3>Solo Travel</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>
            <div className={memoriesCss.memoriesCard}>
                <img src={MemoriesImg7} alt="Memory-img" />
                <div className={memoriesCss.content}>
                    <h3>Private Touring</h3>
                    <a href="#">View Tours</a>
                </div>
            </div>



        </div>
    )
}

export default Memories