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

const Subscriptions = () => {
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
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        name: "John Smith",
        email: "1 March",
        industry: 785,
        skills: "Cash on Delivery",
        experience: "Approved",
      },
      {
        id: 2235235,
        Phone: "Playstation 5",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        name: "Michael Doe",
        email: "1 March",
        industry: 900,
        skills: "Online Payment",
        experience: "Pending",
      },
      {
        id: 2342353,
        Phone: "Redragon S101",
        img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
        name: "John Smith",
        email: "1 March",
        industry: 35,
        skills: "Cash on Delivery",
        experience: "Pending",
      },
      {
        id: 2357741,
        Phone: "Razer Blade 15",
        img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
        name: "Jane Smith",
        email: "1 March",
        industry: 920,
        skills: "Online",
        experience: "Approved",
      },
      {
        id: 2342355,
        Phone: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
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
        
        <div className="retitle" style={{display:"flex", gap:"20px", flexDirection:"column"}} >
          <h2 style={{marginBottom:"0px"}}>My Subscriptions</h2>
          <h3 style={{color:"grey"}}>Subscription logs</h3>
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
              <TableCell className="tableCell">{row.name}</TableCell>
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

export default Subscriptions;