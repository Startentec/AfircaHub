import React from 'react';
import "./footer.css";
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import linkedin from '../assets/linkedin.png';
import tweeter from '../assets/tweeter.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className=' sb_footer-links'>
          <div className='sb_footer-links_div'>
            <h4>Product</h4>
            <a href='/employer'><p>Overview</p></a>
            <a href='/employer'><p>Feature</p></a>
            <a href='/employer'><p>Tutorial</p></a>
            <a href='/employer'><p>Pricing</p></a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Company</h4>
            <a href='/employer'><p>About Us</p></a>
            <a href='/employer'><p>News</p></a>
            <a href='/employer'><p>Career</p></a>
            <a href='/employer'><p>Contact</p></a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>Resources</h4>
            <a href='/employer'><p>Blog</p></a>
            <a href='/employer'><p>Newsletter</p></a>
            <a href='/employer'><p>Help Centre</p></a>
            <a href='/employer'><p>Support</p></a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>resources</h4>
            <a href='/employer'><p>employer</p></a>
            <a href='/employer'><p>employer</p></a>
            <a href='/employer'><p>employer</p></a>
            <a href='/employer'><p>employer</p></a>
          </div>
          <div className='sb_footer-links_div'>
            <h4>socials</h4>
            <div className='socialmedia'>
              <p><img src={fb} alt=''/> </p>
              <p><img src={insta} alt=''/> </p>
              <p><img src={tweeter} alt=''/> </p>
              <p><img src={linkedin} alt=''/> </p>

            </div>

          </div>

        </div>
        <hr></hr>
        <div className='sb_footer-below'>
          <div className='sb_footer-copyright'>
            <p>@{new Date().getFullYear()} The Talent Hub Kenya. All right reserved.</p> 
          </div>
          <div className='sb_footer-below-links'>
            <a href='/terms'><div><p>Terms & Conditions</p></div></a>
            <a href='/privacy'><div><p>Privacy</p></div></a>
            <a href='/security'><div><p>Security</p></div></a>
            <a href='/terms'><div><p>Terms & Conditions</p></div></a>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer;