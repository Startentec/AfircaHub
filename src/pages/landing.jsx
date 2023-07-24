import Intro from "../components/landing/intro/intro";
import Testimonial from "../components/landing/testimonial/testimonial";
import Footer from "../components/landing/footer/footer";
import Solutions from "../components/landing/solutions/solutions";
import Script from "../components/landing/script/script";
import Script1 from "../components/landing/script1/script1";
// import Services from "./components/services/services";
import Slider from '../components/landing/slider/slider';
import  AppBar  from "../components/landing/appbar/appbar";


const Landing = () => {
   return <div>
          <AppBar/>
          <div style={{height:"50px"}}></div>
          <Intro/> 
          <Script1/>
          <Slider/>
          <Script/>
          <Solutions/> 
          <Testimonial/>
          <Footer/>
      </div>
};
export default Landing;