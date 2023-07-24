import React, { useState } from 'react';
import "./testimonial.css";
import quote from '../assets/get-quote-1@2x.png'
import { testimonialsData } from '../../landing/data/testimonialsData';
import leftArrow from "../assets/la.png";
import rightArrow from "../assets/ra.png";

const Testimonial = () => {

  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;

  return (
    <div className="a">
      

      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={testimonialsData[selected].image}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">What Our</h1>
        <h1 style={{lineHeight:"40px", margin:"5px"}}>Customers Say</h1>
        <p><img className="quoted" src={quote} alt=''/> </p>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        {testimonialsData[selected].review}
        </p>
  
        <div className="a-award">
          
          <div className="a-award-texts">
            <h4 className="a-award-title">{testimonialsData[selected].name}</h4>
            <p className="a-award-desc">
             {testimonialsData[selected].status}
            </p>
            <div>
                <img className='testas'
                  onClick={()=>{
                    selected === 0
                    ? setSelected(tlength - 1)
                    : setSelected((prev) => prev - 1);
                  }}
                src={leftArrow} alt=''/>

                <img className='testas'
                  onClick={()=>{
                    selected === tlength -1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                  }}
                    src={rightArrow} alt=''/>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
 }
 export default Testimonial;