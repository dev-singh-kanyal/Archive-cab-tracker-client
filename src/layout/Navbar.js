
import React, { useState } from "react";
import {AppBar,Toolbar,CssBaseline,Typography,makeStyles,Box,useTheme,Menu,useMediaQuery,Button,TextField} from "@material-ui/core";
import Badge from '@mui/material/Badge';
import logo from '../media/logo2.png'
import hero from '../media/client2.jpg'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';

export function Navbar() {
  
  // var totalNotifications=3;
  const [totalNotifications,setTotalNotifications] = useState(3)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleNotification = (event) => { 
    setAnchorEl(event.currentTarget);
    setTotalNotifications((totalNotifications-1)>0 ? (totalNotifications-1) : 0 );
   
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const user=undefined
  return (
     <>
    <AppBar position="static" className="navComponent"   style={{ backgroundColor: "#FFFF" }} >
      <CssBaseline  />
      <Toolbar style={{height:"150px" , background:"#00A8E8",alignItems:"flex-start"}}>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <img src={logo} style={{width:"50px",height:"auto",paddingTop:"20px"}}></img>
        </div>
        <div style={{fontSize:"15px",padding:"20px"}}>IOCL TRACKER</div>
        <div>
  
        <Badge badgeContent={totalNotifications} color="error" sx={{marginTop:"18px"}} 
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleNotification}
         >
            <NotificationsIcon />
        </Badge>
        <div/>
      </div>
      </Toolbar>
      <div style={{position:"relative", margin:"auto"}}>
        <img src={hero}  style={{width:"250px",height:"140px",borderRadius:"1rem",position:"absolute",top:"-50px",
          boxShadow: "1px 2px 9px #2d292a"
        }} ></img>
      </div>

 
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Welcome 👋 {localStorage.getItem('driverName')}</MenuItem>
        <MenuItem onClick={handleClose}>New User Signed in !</MenuItem>
      </Menu>
    </AppBar>

       </>
  );
}
export default Navbar;