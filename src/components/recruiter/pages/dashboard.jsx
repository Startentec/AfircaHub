import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../sidenav';
// import Typography from '@mui/material/Typography';
import { styled,} from '@mui/material/styles';
import Widget from "../widget/Widget";
import Datatable from "../datatable/Datatable";
import { Grid } from '@mui/material';

const Dashboard = () => {

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
        

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
        <div className="widgets" style={{ width:"100%"}} >
        <Grid className="wright" container style={{gap:"10px"}}>
          <Grid item xs={11} md={5.9} lg={2.9}>
            <Widget type="user" />
          </Grid>
          <Grid item xs={11} md={5.9} lg={2.9}>
          <Widget type="earning" />
          </Grid>
          <Grid item xs={11} md={5.9} lg={2.9}>
          <Widget type="balance" />
          </Grid>
          <Grid item xs={11} md={5.9} lg={2.9}>
          <Widget type="order" />
          </Grid>
        </Grid>
        
        </div>
        
        <div className="list" style={{marginTop:"20px", display:"flex"}}>
          <div className='listContainer' style={{flex:"6",width:"100%"}}>
           <Datatable/>
          </div>
          
        </div>
      </Box>

      </Box>
    </>
    
  );
};

export default Dashboard;