import React, { useState } from 'react';
import "./services.css";
import { testimonialsData } from '../data/testimonialsData';
import leftArrow from "../assets/la.png";
import rightArrow from "../assets/ra.png";

const Services = () => {

  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;

    return (
    <div className='Testimonials1'>
      <div className='left-t'>
        <span>Testimonials</span>
        <span className='stroke-text'>what they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{color: 'orange'}}>
            {testimonialsData[selected].name} 
          </span>
         - {testimonialsData[selected].status}
        </span>
      </div>

      <div className='right-t'>
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt=''/> 
        <div className="arrows">

          <img
            onClick={()=>{
              selected === 0
              ? setSelected(tlength - 1)
              : setSelected((prev) => prev - 1);
            }}
           src={leftArrow} alt=''/>

          <img 
            onClick={()=>{
              selected === tlength -1
              ? setSelected(0)
              : setSelected((prev) => prev + 1);
            }}
              src={rightArrow} alt=''/>
        
        </div>
      </div>
    </div>
  );
};

export default Services;