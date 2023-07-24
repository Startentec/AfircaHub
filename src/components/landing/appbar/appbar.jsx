import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'
import profile from "../../landing/assets/logo.png";
import "./appbar.css";
import { useNavigate } from 'react-router-dom';

const Appbar = () => {
   const navigate = useNavigate();
  return (
    <div>
      <AppBar elevation={0} className="barup">
         <Toolbar style={{display:"flex", justifyContent:"space-between", backgroundColor:"rgba(63, 9, 9, 0.432)"}}>
            <div style={{display:"flex",alignItems:"center"}}>
               <div className="container-imageyla">
                  <img src={profile} alt="profile" className="profileyla"/>
               </div>
               <Typography variant='h6'>
                  Welcome to Talent Hub Kenya
               </Typography>
            </div>
            <div>
               <p className="linkya">
               <a className="ankaa" onClick={()=>{navigate("/dashboard")}} style={{color:"grey"}} >Recruiter  </a><a className="ankaa" onClick={()=>{navigate("/login")}} >Login ?</a> Or <a onClick={()=>{navigate("/register")}}>Sign Up?</a>
               </p>
            </div>
         </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appbar;