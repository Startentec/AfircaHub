import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../sidenav';
import { Grid } from '@mui/material';
import { styled,} from '@mui/material/styles';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from '@mui/material/Button';
import "./resumelist.css"
// import profile from "../../landing/assets/profy.png";
// import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
// import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
// import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { RefreshOutlinedIcon } from '@mui/icons-material';

const Findtalents = () => {
   const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    }));

    const rows = [
      {
        id: 1143155,
        Phone: "Acer Nitro 5",
        name: "John Smith",
        email: "1 March",
        industry: 785,
        skills: "Cash on Delivery",
        experience: "Approved",
      },
      {
        id: 2235235,
        Phone: "Playstation 5",
        name: "Michael Doe",
        email: "1 March",
        industry: 900,
        skills: "Online Payment",
        experience: "Pending",
      },
      {
        id: 2342353,
        Phone: "Redragon S101",
        name: "John Smith",
        email: "1 March",
        industry: 35,
        skills: "Cash on Delivery",
        experience: "Pending",
      },
      {
        id: 2357741,
        Phone: "Razer Blade 15",
        name: "Jane Smith",
        email: "1 March",
        industry: 920,
        skills: "Online",
        experience: "Approved",
      },
      {
        id: 2342355,
        Phone: "ASUS ROG Strix",
        name: "Harold Carol",
        email: "1 March",
        industry: 2000,
        skills: "Online",
        experience: "Pending",
      },
    ];
  


  return (
   <>
      <Box sx={{ display: "flex"}}>
        <Sidenav/>
        

      <Box component="remain" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
        <div className="retitle" style={{display:"flex", gap:"20px"}} >
          <h2>Find Talents</h2>
        </div>

        <div className="resach">
           <Grid container style={{gap:"10px", alignItems:"center"}}>
             <Grid item xs={9} md={9} lg={9}>
                <input className="sachinput" type="text" placeholder="Search..." style={{width:"100%"}} />
              </Grid> 
              <Grid item xs={2.5} md={2.5} lg={2.5}> 
                <Button startIcon={<SearchOutlinedIcon fontSize="small"/>}  color="grey" variant="contained" fontSize="small" className="buttons" style={{width:"100%", marginRight:"50px"}} >Go</Button>
              </Grid>
              <Grid item xs={11.5} md={3.8} lg={3.5}>
                <Button startIcon={<UploadFileIcon fontSize="small"/>}  color="grey" variant="contained" fontSize="small" className="buttons" style={{width:"100%"}}>Refresh</Button>
              </Grid>
              <Grid item xs={11.5} md={3.8} lg={3.5}>
                <Button startIcon={<UploadFileIcon fontSize="small"/>}  color="grey" variant="contained" fontSize="small" className="buttons" style={{width:"100%"}} >Filter by industry</Button>
              </Grid>
              <Grid item xs={11.5} md={3.8} lg={3.5}>
                <Button startIcon={<UploadFileIcon fontSize="small"/>}  color="grey" variant="contained" fontSize="small" className="buttons" style={{width:"100%"}} >Filter by title</Button>
              </Grid>
            </Grid>
        </div>
    <hr></hr>
        <div className="tebols" style={{marginTop:"20px",display:"flex",width:"100%"}}>

        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Phone</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Industry</TableCell>
            <TableCell className="tableCell">skills</TableCell>
            <TableCell className="tableCell">experience</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.Phone}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.industry}</TableCell>
              <TableCell className="tableCell">{row.skills}</TableCell>
              <TableCell className="tableCell">{row.experience}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
        </div>
      </Box>

      </Box>
    </>
  )
}

export default Findtalents;