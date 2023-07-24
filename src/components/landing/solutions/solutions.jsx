import "./solutions.css";
import quote from '../assets/Lovepik_com-400282021-fast-forward-button-linear-icon.png'
export default function Testimonials() {

   return (
     <div className="testimonials" id="testimonials">
       <h1>Explore solutions</h1>
       <div className="container">
         
           <div className="card" id="c1">
             <div className="top">
               <img src="assets/right-arrow.png" className="left" alt="" />
               
               
             </div>
             <div className="center" hidden>
             
             </div>
             <div className="bottom">
               <div className="panga">
               <h2>Transforming Recruitment Strategies</h2>
                  <h3>Discover </h3>
                  <img className="quote" src={quote} alt=''/>
               </div>
             </div>
           </div>
      
       

       
         
         <div className="card" id="c2">
           <div className="top">
             <img src="assets/right-arrow.png" className="left" alt="" />
             
             
           </div>
           <div className="center" hidden>
           
           </div>
           <div className="bottom">
             <div className="panga">
             <h2>Transforming Recruitment Strategies</h2>
                <h3>Discover </h3>
                <img className="quote" src={quote} alt=''/>
             </div>
           </div>
         </div>
    
     

         <div className="card" id="c3">
           <div className="top">
             <img src="assets/right-arrow.png" className="left" alt="" />
             
             
           </div>
           <div className="center" hidden>
           
           </div>
           <div className="bottom">
             <div className="panga">
             <h2>Transforming Recruitment Strategies</h2>
                <h3>Discover </h3>
                <img className="quote" src={quote} alt=''/>
             </div>
           </div>
         </div>
    
         </div>
     </div>

     
   );
 }
 
