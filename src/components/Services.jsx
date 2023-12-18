import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/img/3.jpg"
import img2 from "../assets/img/4.jpg"
const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop 
        autoPlay 
        showStatus={false} 
        interval={4000}
        showThumbs={false}
        >
            <div >
                <img src={img1} alt = ""></img>
                <p style= {{font:"200 1.4rem Roboto"}} className="legend"> Full Stack </p>
            </div>
            <div>
                <img src={img2} alt = ""></img>
                <p style= {{font:"200 1.4rem Roboto"}} className="legend"> Consultancy Services </p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services