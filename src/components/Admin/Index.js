import React, {  useState } from "react";
import {NavLink, useLocation} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Grid,Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Close from "@mui/icons-material/Close";

import { userRoutes } from "../../route";

import Logout from "./Logout";
import Products from "./Products";
import Members from "./Members";
import Client from "./Client";
import Analytics from "./Analytics";


const drawerWidth = 240;

function ResponsiveDrawer(props) {

  const { window } = props;



  const [mobileOpen, setMobileOpen] = React.useState(false)

  const [title, setTitle] = useState('Team Members')

  let data = sessionStorage.getItem('value');
  let newValue = JSON.parse(data)
  console.log(newValue.email)

 let renderComponent
  if (title === 'Logout') {
    renderComponent = <Logout />
  }else if(title === 'Products'){
    renderComponent = <Products />
  }else if(title === 'Clients'){
    renderComponent = <Client />
  }else if(title === 'Team Members'){
    renderComponent = <Members />
  }else if(title === 'Analytics'){
    renderComponent = <Analytics />
  }


 


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const location = useLocation()
  console.log(location.pathname)

  const drawer = (
    <div className="drawer" style={{background: "#fff", outline: "1px solid red", minHeight: "100vh", padding: "0px 10px"}}>
      <Toolbar>
        <NavLink to={`/`} exact >
          <Typography variant="h5" sx={{ color: 'blue', flexGrow: 1,  fontWeight: 700 }}>
            Home 
          </Typography>
        </NavLink>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' }, position: "relative", left: "80px" }}
        >
          <Close />
        </IconButton>

      </Toolbar>
      {
        userRoutes.map((item, index) => {
          console.log(item)
          return (
            <>
              <ListItem sx={{ pl: '30px', my: '10px', cursor: "pointer" }} className="" onClick={() => setTitle(item.title)}>
                {/* <ListItemAvatar>
                  <img src={item.icon} alt={`${item.title}_icon`} className="  ima" />
                </ListItemAvatar> */}
                <ListItemText 
                  disableTypography 
                  
                  style={{fontWeight:'bold'}}
                 
                  primary={item.title} sx={{ color: 'blue', fontWeight: 700 }} />
              </ListItem>
              {index % 3 === 0 && index > 1 ? <Divider component="" /> : null}

            </>
          )
        })
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: "#fff", color: "black", borderBottom: '1px solid #f5de06'
      }}
        elevation={0} position="fixed" >

        <Toolbar>
          <IconButton color="primary" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }} >
            <MenuIcon />
          </IconButton>

          <Grid alignItems="center" container>
            <Grid item xs={6} sm={6}>
              <Typography variant="h6" > {title} </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              
              <Typography sx={{ textAlign: 'right' }}>
                {newValue.email}
              </Typography>
            </Grid>

          </Grid>

        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders" >

        <Drawer
          container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true, }}
          sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }}}
          children={drawer} />

        <Drawer
          variant="permanent"
          sx={{ display: {xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }}}
          open children={drawer} />

      </Box>

      <Container maxWidth={false} component="main" sx={{  width: { sm: `calc(100% - ${drawerWidth}px)` } }} >
        <Toolbar />
        { renderComponent }
      </Container>
    </Box>
  );
}



export default ResponsiveDrawer;
