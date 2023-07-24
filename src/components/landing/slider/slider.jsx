import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default function SimpleSlider() {
  var settings = {
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   initialSlide: 0,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         initialSlide: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 };
  return (
   <div className="shikilia">
        <h1>Our Services</h1>
    <Slider {...settings}>
      <div className="card1" id="c1" >
                <div className="top">
                  
                </div>
                <div className="center" >
                
                </div>
                <div className="bottom1">
                  <div className="panga1">
                    <h2>UX/UI Development</h2>
                    <button className="butst">View Candidate</button>
                    
                  </div>
                </div>
      </div>
        
      <div className="card1" id="c2">
         <div className="top">
      
         </div>
         <div className="center" >
         
         </div>
         <div className="bottom1">
            <div className="panga1">
            <h2>Software Developer</h2>
            <button className="butst">View Candidates</button>
            </div>
         </div>
      </div>
      
      <div className="card1" id="c1">
                <div className="top">
                  
                </div>
                <div className="center" >
                
                </div>
                <div className="bottom1">
                  <div className="panga1">
                    <h2>UX/UI Development</h2>
                    <button className="butst">View Candidate</button>
                    
                  </div>
                </div>
      </div>

      <div className="card1" id="c2">
         <div className="top">
      
         </div>
         <div className="center">
         
         </div>
         <div className="bottom1">
            <div className="panga1">
            <h2>Software Developer</h2>
            <button className="butst">View Candidates</button>
            </div>
         </div>
      </div>
    </Slider>
    </div>
  );
}