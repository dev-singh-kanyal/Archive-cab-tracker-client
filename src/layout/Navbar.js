
import React from "react";
import {AppBar,Toolbar,CssBaseline,Typography,makeStyles,Box,useTheme,useMediaQuery,TextField} from "@material-ui/core";

import { Link } from "react-router-dom";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import logo from '../media/logo2.png'
import hero from '../media/client2.jpg'

const notificationAlert=(e)=>{
  console.log('No notifications');
  alert('No notifications')
}
export function Navbar() {
  const user=undefined
  return (
    <AppBar position="static" className="navComponent"   style={{ backgroundColor: "#FFFF" }} >
      <CssBaseline  />
      <Toolbar style={{height:"150px" , background:"#00A8E8",alignItems:"flex-start"}}>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <img src={logo} style={{width:"50px",height:"auto",paddingTop:"20px"}}></img>
        </div>
        <div style={{fontSize:"15px",padding:"20px"}}>IOCL TRACKER</div>
        <div>
        <NotificationsActiveIcon  onClick={notificationAlert} sx={{marginTop:"15px"}}/>
        <div/>
      </div>
      </Toolbar>
      <div style={{position:"relative", margin:"auto"}}>
        <img src={hero}  style={{width:"250px",height:"140px",borderRadius:"1rem",position:"absolute",top:"-50px",
          boxShadow: "1px 2px 9px #2d292a"
        }} ></img>
      </div>
    </AppBar>
  );
}
export default Navbar;