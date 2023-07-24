import React from 'react'
import './script.css'
import quote from '../assets/quote-left-1@2x.png'

const Script = () => {
  return (
   <div className="skript">
       <p><img className="quot" src={quote} alt=''/> </p>
       <h3 className="skript-t">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </h3>
   </div>
  )
}

export default Script;