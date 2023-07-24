import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../sidenav';
import "./uploadresumes.css";
// import Typography from '@mui/material/Typography';
import { styled,} from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { grey } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import UpdateIcon from '@mui/icons-material/Update';
import SearchIcon from '@mui/icons-material/Search';

import profile from "../../../components/landing/assets/logo.png";
// import email from "../assets/e.png";
// import pass from "../assets/p.png";

const Myaccount = () => {

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
 

  return (
    <>
      <Box sx={{ display: "flex"}}>
        <Sidenav/>
        {/* <h1>Upload resumes</h1> */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div >
          <Grid container style={{gap:"10px"}}>
{/* ---------------------------------------------------------- */}
            <Grid item xs={12} md={3.7} lg={3}>
             <div className="main" >
               <div className="s">
                    <div className="imgs" >
                      <div className="container-image">
                        <img src={profile} alt="profile" className="profile" />
                      </div>
                    </div>

                    <div className="bn">
                      <Button startIcon={<UploadFileIcon fontSize="small"/>}  color="grey" variant="contained" fontSize="small" className="buttons" >Upload Image</Button>
                      
                      <h2>Jeremiah Asanya</h2>
                      
                      <div><hr/>
                        <div className="lap">
                          {/* <Typography>industry</Typography> */}
                          <p> Industry :</p>
                          <p>Email :</p>
                          <p>Mobile :</p>
                        </div>
                        
                      </div>

                      <div className="second-input">
                      <div className="label">
                        
                        
                      </div>
                      
                      </div>
                
                    </div>
                  </div>
              </div>
            </Grid>
{/* ------------------------------------------------------ */}
            <Grid item xs={12} md={4.2} lg={5.7}>
              <div className="main" >
              <h3 style={{paddingLeft:"10px"}}>Update my account</h3>
                 <div className="resul">
                    <Grid container style={{gap:"10px"}}>
                      <Grid item xs={11} md={11} lg={5.5}>
                        <Button className="buttons" startIcon={<UpdateIcon fontSize="small"/>}  color="grey" variant="contained" style={{backgroundColor: "rgb(63, 7, 7)", color:"white"}} >Update resume</Button>
                      </Grid>
                      <Grid item xs={11} md={11} lg={5.5}>
                        <Button className="buttons" startIcon={<SearchIcon fontSize="small"/>}  color="grey" variant="contained" style={{backgroundColor: "rgb(63, 7, 7)", color:"white"}} >Search resumes</Button>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="wrightt">
                  <Grid className="wright" container style={{gap:"10px"}}>
                    <Grid item xs={12} md={12} lg={3.7}>
                    <TextField id="standard-basic" label="Your Names" variant="standard" size="small" color="grey" style={{width:"100%"}}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={3.7}>
                    <TextField id="standard-basic" label="Your mobile" variant="standard" size="small" color="grey" style={{width:"100%"}}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={3.7}>
                    <TextField id="standard-basic" label="Email" variant="standard" size="small" color="grey" style={{width:"100%"}}/>
                    </Grid>
                  </Grid>
                  <Grid className="wright" container style={{gap:"10px"}}>
                    <Grid item xs={12} md={12} lg={3.7}>
                    <TextField id="standard-basic" label="Company" variant="standard" size="small" color="grey" style={{width:"100%"}}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={3.7}>
                    <TextField id="standard-basic" label="Industry" variant="standard" size="small" color="grey" style={{width:"100%"}}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={3.7}>
                    <TextField id="standard-basic" label="Job Title" variant="standard" size="small" color="grey" style={{width:"100%"}}/>
                    </Grid>
                  </Grid>
                  
                  </div>

                  <div className="yourself">
                    
                    <TextField id="outlined-multiline-static" color="grey"  label="Say something about yourself"  multiline  maxRows={4}   style={{width:"100%"}} />
                  </div>
              </div>
            </Grid>
{/* ------------------------------------------------------------------ */}
            <Grid item xs={12} md={3.7} lg={3}>
               <div className="main">
                  <div className="si">
                    <h3>Add a review</h3>
                    <TextField style={{width:"100%"}} id="standard-multiline-static"  label="Review" color="grey" multiline  rows={4}   variant="standard"  />
                    <Button id="br" startIcon={<UploadFileIcon fontSize="small"/>}  color="grey" variant="contained" fontSize="small" className="buttons" style={{backgroundColor: "rgb(63, 7, 7)", color:"white"}}>Add Review</Button>
                      
                   <div className="imgss" >
                  
                      <div className="container-image">
                        <img src={profile} alt="profile" id="profile"/>
                      </div>
                      <div className="nam">
                        <h4>Jeremiah Asanya</h4>
                      </div>
                    </div><hr/>
                    
                        <div className="bnn">
                          
                          <h4 style={{marginTop:"0"}}>Company</h4>
                          <p style={{fontSize:"11px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea inventore v.</p>
                          
                          <div><hr/>
                            <div className="lapp">
                              <div className="rat">
                                <Rating name="size-small" defaultValue={2} size="small" />
                              </div>
                              <div className="tim">
                                <h5 style={{marginTop:"0"}}>2 years ago</h5>
                              </div>
                            </div>
                          </div>
                    
                        </div>
                  </div>
               </div>
            </Grid>

          </Grid>
        </div>
        
      </Box>
      </Box>
    </>
    
  );
};

export default Myaccount; 