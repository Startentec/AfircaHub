import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../sidenav';
import { Grid } from '@mui/material';
import { styled,} from '@mui/material/styles';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from '@mui/material/Button';
import "./resumelist.css"
import profile from "../../landing/assets/profy.png";
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
// import { RefreshOutlinedIcon } from '@mui/icons-material';

const Resumelist = () => {
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
        

      <Box component="remain" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
        <div className="retitle" style={{display:"flex", gap:"20px"}} >
          <h2>My resumes list</h2>
        </div>

        <div className="resach">
           <Grid container style={{gap:"10px", alignItems:"center"}}>
             <Grid item xs={9} md={9} lg={4}>
                <input className="sachinput" type="text" placeholder="Search..." style={{width:"100%"}} />
              </Grid> 
              <Grid item xs={2.5} md={2.5} lg={2}> 
                <Button startIcon={<SearchOutlinedIcon fontSize="small"/>}  color="grey" variant="contained" fontSize="small" className="buttons" style={{width:"100%", marginRight:"50px"}} >Go</Button>
              </Grid>
              <Grid item xs={11.5} md={3.8} lg={1.5}>
                <Button startIcon={<UploadFileIcon fontSize="small"/>}  color="grey" variant="contained" fontSize="small" className="buttons" style={{width:"100%"}}>Refresh</Button>
              </Grid>
              <Grid item xs={11.5} md={3.8} lg={2}>
                <Button startIcon={<UploadFileIcon fontSize="small"/>}  color="grey" variant="contained" fontSize="small" className="buttons" style={{width:"100%"}} >Filter by industry</Button>
              </Grid>
              <Grid item xs={11.5} md={3.8} lg={1.8}>
                <Button startIcon={<UploadFileIcon fontSize="small"/>}  color="grey" variant="contained" fontSize="small" className="buttons" style={{width:"100%"}} >Filter by title</Button>
              </Grid>
            </Grid>
        </div>
    <hr></hr>
        <div className="recards" style={{marginTop:"20px",display:"flex",width:"100%"}}>

          <Grid container style={{gap:"10px", alignItems:"center",justifyContent:"center", rowGap:"20px", columnGap:"20px"}}>
            <Grid item xs={11} md={5.5} lg={3}>
              <div className="sub-mainyl">

                <div className="imgsyl">
                  <div className="container-imageyl">
                    <img src={profile} alt="profile" className="profileyl"/>
                  </div>
                  <div className="jinaCheo">
                    <h3 style={{padding:"0px", margin:"0px"}}>Chris Akio</h3>
                    <h4 style={{padding:"0px", margin:"0px"}}>designer</h4>
                  </div>
                  
                </div>
                
                <div className="somes">
                  <hr></hr>
                  <p style={{fontSize:"10px", paddingBottom:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                  <hr></hr>
                </div>
                <div className="revsco">
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", fontSize:"13px", paddingLeft:"20px"}}>
                    <StarBorderOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}> Score</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px"}}>
                    <ThumbUpOffAltOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}>4 Reviews</h5>
                  </div>
                  
                  
                </div>
                 <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px", justifyContent:"center"}}>
                    <ArrowForwardOutlinedIcon fontSize="small"/>
                    <h5 >View profile</h5>
                  </div>
              </div>
            </Grid> 

            <Grid item xs={11} md={5.5} lg={3}>
              <div className="sub-mainyl">

                <div className="imgsyl">
                  <div className="container-imageyl">
                    <img src={profile} alt="profile" className="profileyl"/>
                  </div>
                  <div className="jinaCheo">
                    <h3 style={{padding:"0px", margin:"0px"}}>Chris Akio</h3>
                    <h4 style={{padding:"0px", margin:"0px"}}>designer</h4>
                  </div>
                  
                </div>
                
                <div className="somes">
                  <hr></hr>
                  <p style={{fontSize:"10px", paddingBottom:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                  <hr></hr>
                </div>
                <div className="revsco">
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", fontSize:"13px", paddingLeft:"20px"}}>
                    <StarBorderOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}> Score</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px"}}>
                    <ThumbUpOffAltOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}>4 Reviews</h5>
                  </div>
                  
                  
                </div>
                 <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px", justifyContent:"center"}}>
                    <ArrowForwardOutlinedIcon fontSize="small"/>
                    <h5 >View profile</h5>
                  </div>
              </div>
            </Grid> 
            <Grid item xs={11} md={5.5} lg={3}>
              <div className="sub-mainyl">

                <div className="imgsyl">
                  <div className="container-imageyl">
                    <img src={profile} alt="profile" className="profileyl"/>
                  </div>
                  <div className="jinaCheo">
                    <h3 style={{padding:"0px", margin:"0px"}}>Chris Akio</h3>
                    <h4 style={{padding:"0px", margin:"0px"}}>designer</h4>
                  </div>
                  
                </div>
                
                <div className="somes">
                  <hr></hr>
                  <p style={{fontSize:"10px", paddingBottom:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                  <hr></hr>
                </div>
                <div className="revsco">
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", fontSize:"13px", paddingLeft:"20px"}}>
                    <StarBorderOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}> Score</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px"}}>
                    <ThumbUpOffAltOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}>4 Reviews</h5>
                  </div>
                  
                  
                </div>
                 <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px", justifyContent:"center"}}>
                    <ArrowForwardOutlinedIcon fontSize="small"/>
                    <h5 >View profile</h5>
                  </div>
              </div>
            </Grid> 
            <Grid item xs={11} md={5.5} lg={3}>
              <div className="sub-mainyl">

                <div className="imgsyl">
                  <div className="container-imageyl">
                    <img src={profile} alt="profile" className="profileyl"/>
                  </div>
                  <div className="jinaCheo">
                    <h3 style={{padding:"0px", margin:"0px"}}>Chris Akio</h3>
                    <h4 style={{padding:"0px", margin:"0px"}}>designer</h4>
                  </div>
                  
                </div>
                
                <div className="somes">
                  <hr></hr>
                  <p style={{fontSize:"10px", paddingBottom:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                  <hr></hr>
                </div>
                <div className="revsco">
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", fontSize:"13px", paddingLeft:"20px"}}>
                    <StarBorderOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}> Score</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px"}}>
                    <ThumbUpOffAltOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}>4 Reviews</h5>
                  </div>
                  
                  
                </div>
                 <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px", justifyContent:"center"}}>
                    <ArrowForwardOutlinedIcon fontSize="small"/>
                    <h5 >View profile</h5>
                  </div>
              </div>
            </Grid> 
            <Grid item xs={11} md={5.5} lg={3}>
              <div className="sub-mainyl">

                <div className="imgsyl">
                  <div className="container-imageyl">
                    <img src={profile} alt="profile" className="profileyl"/>
                  </div>
                  <div className="jinaCheo">
                    <h3 style={{padding:"0px", margin:"0px"}}>Chris Akio</h3>
                    <h4 style={{padding:"0px", margin:"0px"}}>designer</h4>
                  </div>
                  
                </div>
                
                <div className="somes">
                  <hr></hr>
                  <p style={{fontSize:"10px", paddingBottom:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                  <hr></hr>
                </div>
                <div className="revsco">
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", fontSize:"13px", paddingLeft:"20px"}}>
                    <StarBorderOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}> Score</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px"}}>
                    <ThumbUpOffAltOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}>4 Reviews</h5>
                  </div>
                  
                  
                </div>
                 <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px", justifyContent:"center"}}>
                    <ArrowForwardOutlinedIcon fontSize="small"/>
                    <h5 >View profile</h5>
                  </div>
              </div>
            </Grid> 
            <Grid item xs={11} md={5.5} lg={3}>
              <div className="sub-mainyl">

                <div className="imgsyl">
                  <div className="container-imageyl">
                    <img src={profile} alt="profile" className="profileyl"/>
                  </div>
                  <div className="jinaCheo">
                    <h3 style={{padding:"0px", margin:"0px"}}>Chris Akio</h3>
                    <h4 style={{padding:"0px", margin:"0px"}}>designer</h4>
                  </div>
                  
                </div>
                
                <div className="somes">
                  <hr></hr>
                  <p style={{fontSize:"10px", paddingBottom:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                  <hr></hr>
                </div>
                <div className="revsco">
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", fontSize:"13px", paddingLeft:"20px"}}>
                    <StarBorderOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}> Score</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px"}}>
                    <ThumbUpOffAltOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}>4 Reviews</h5>
                  </div>
                  
                  
                </div>
                 <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px", justifyContent:"center"}}>
                    <ArrowForwardOutlinedIcon fontSize="small"/>
                    <h5 >View profile</h5>
                  </div>
              </div>
            </Grid> 
            <Grid item xs={11} md={5.5} lg={3}>
              <div className="sub-mainyl">

                <div className="imgsyl">
                  <div className="container-imageyl">
                    <img src={profile} alt="profile" className="profileyl"/>
                  </div>
                  <div className="jinaCheo">
                    <h3 style={{padding:"0px", margin:"0px"}}>Chris Akio</h3>
                    <h4 style={{padding:"0px", margin:"0px"}}>designer</h4>
                  </div>
                  
                </div>
                
                <div className="somes">
                  <hr></hr>
                  <p style={{fontSize:"10px", paddingBottom:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                  <hr></hr>
                </div>
                <div className="revsco">
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", fontSize:"13px", paddingLeft:"20px"}}>
                    <StarBorderOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}> Score</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px"}}>
                    <ThumbUpOffAltOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}>4 Reviews</h5>
                  </div>
                  
                  
                </div>
                 <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px", justifyContent:"center"}}>
                    <ArrowForwardOutlinedIcon fontSize="small"/>
                    <h5 >View profile</h5>
                  </div>
              </div>
            </Grid> 

            <Grid item xs={11} sm={5} md={5.5} lg={3}>
              <div className="sub-mainyl">

                <div className="imgsyl">
                  <div className="container-imageyl">
                    <img src={profile} alt="profile" className="profileyl"/>
                  </div>
                  <div className="jinaCheo">
                    <h3 style={{padding:"0px", margin:"0px"}}>Chris Akio</h3>
                    <h4 style={{padding:"0px", margin:"0px"}}>designer</h4>
                  </div>
                  
                </div>
                
                <div className="somes">
                  <hr></hr>
                  <p style={{fontSize:"10px", paddingBottom:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                  <hr></hr>
                </div>
                <div className="revsco">
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", fontSize:"13px", paddingLeft:"20px"}}>
                    <StarBorderOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}> Score</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px"}}>
                    <ThumbUpOffAltOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}>4 Reviews</h5>
                  </div>
                  
                  
                </div>
                 <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px", justifyContent:"center"}}>
                    <ArrowForwardOutlinedIcon fontSize="small"/>
                    <h5 >View profile</h5>
                  </div>
              </div>
            </Grid> 
            <Grid item xs={11} sm={5} md={5.5} lg={3}>
              <div className="sub-mainyl">

                <div className="imgsyl">
                  <div className="container-imageyl">
                    <img src={profile} alt="profile" className="profileyl"/>
                  </div>
                  <div className="jinaCheo">
                    <h3 style={{padding:"0px", margin:"0px"}}>Chris Akio</h3>
                    <h4 style={{padding:"0px", margin:"0px"}}>designer</h4>
                  </div>
                  
                </div>
                
                <div className="somes">
                  <hr></hr>
                  <p style={{fontSize:"10px", paddingBottom:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                  <hr></hr>
                </div>
                <div className="revsco">
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", fontSize:"13px", paddingLeft:"20px"}}>
                    <StarBorderOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}> Score</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px"}}>
                    <ThumbUpOffAltOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}>4 Reviews</h5>
                  </div>
                  
                  
                </div>
                 <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px", justifyContent:"center"}}>
                    <ArrowForwardOutlinedIcon fontSize="small"/>
                    <h5 >View profile</h5>
                  </div>
              </div>
            </Grid> 
            <Grid item xs={11} sm={5} md={5.5} lg={3}>
              <div className="sub-mainyl">

                <div className="imgsyl">
                  <div className="container-imageyl">
                    <img src={profile} alt="profile" className="profileyl"/>
                  </div>
                  <div className="jinaCheo">
                    <h3 style={{padding:"0px", margin:"0px"}}>Chris Akio</h3>
                    <h4 style={{padding:"0px", margin:"0px"}}>designer</h4>
                  </div>
                  
                </div>
                
                <div className="somes">
                  <hr></hr>
                  <p style={{fontSize:"10px", paddingBottom:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                  <hr></hr>
                </div>
                <div className="revsco">
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", fontSize:"13px", paddingLeft:"20px"}}>
                    <StarBorderOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}> Score</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px"}}>
                    <ThumbUpOffAltOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}>4 Reviews</h5>
                  </div>
                  
                  
                </div>
                 <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px", justifyContent:"center"}}>
                    <ArrowForwardOutlinedIcon fontSize="small"/>
                    <h5 >View profile</h5>
                  </div>
              </div>
            </Grid> 
            <Grid item xs={11} sm={5} md={5.5} lg={3}>
              <div className="sub-mainyl">

                <div className="imgsyl">
                  <div className="container-imageyl">
                    <img src={profile} alt="profile" className="profileyl"/>
                  </div>
                  <div className="jinaCheo">
                    <h3 style={{padding:"0px", margin:"0px"}}>Chris Akio</h3>
                    <h4 style={{padding:"0px", margin:"0px"}}>designer</h4>
                  </div>
                  
                </div>
                
                <div className="somes">
                  <hr></hr>
                  <p style={{fontSize:"10px", paddingBottom:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                  <hr></hr>
                </div>
                <div className="revsco">
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", fontSize:"13px", paddingLeft:"20px"}}>
                    <StarBorderOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}> Score</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px"}}>
                    <ThumbUpOffAltOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}>4 Reviews</h5>
                  </div>
                  
                  
                </div>
                 <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px", justifyContent:"center"}}>
                    <ArrowForwardOutlinedIcon fontSize="small"/>
                    <h5 >View profile</h5>
                  </div>
              </div>
            </Grid> 
            <Grid item xs={11} sm={5} md={5.5} lg={3}>
              <div className="sub-mainyl">

                <div className="imgsyl">
                  <div className="container-imageyl">
                    <img src={profile} alt="profile" className="profileyl"/>
                  </div>
                  <div className="jinaCheo">
                    <h3 style={{padding:"0px", margin:"0px"}}>Chris Akio</h3>
                    <h4 style={{padding:"0px", margin:"0px"}}>designer</h4>
                  </div>
                  
                </div>
                
                <div className="somes">
                  <hr></hr>
                  <p style={{fontSize:"10px", paddingBottom:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                  <hr></hr>
                </div>
                <div className="revsco">
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center", fontSize:"13px", paddingLeft:"20px"}}>
                    <StarBorderOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}> Score</h5>
                  </div>
                  <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px"}}>
                    <ThumbUpOffAltOutlinedIcon fontSize="small"/>
                    <h5 style={{padding:"0px", margin:"0px"}}>4 Reviews</h5>
                  </div>
                  
                  
                </div>
                 <div style={{display:"flex", flexDirection:"row", alignItems:"center",fontSize:"13px", justifyContent:"center"}}>
                    <ArrowForwardOutlinedIcon fontSize="small"/>
                    <h5 >View profile</h5>
                  </div>
              </div>
            </Grid> 
            </Grid>
          
        </div>
      </Box>

      </Box>
    </>
  )
}

export default Resumelist;