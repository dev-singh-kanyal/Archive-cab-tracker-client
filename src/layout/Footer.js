
import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import { NavLink, useNavigate } from "react-router-dom";

import {
  Box, makeStyles,
} from "@material-ui/core";

import PersonIcon from '@mui/icons-material/Person';

export function Footer() {

  const history = useNavigate();

  const [value, setValue] = React.useState(0);
  const updateRoute=(route)=>{
    history(route)
  }

  const handleChange = (e) => {
    console.log(e.target);
  }

  return (
      <Box sx={{ width: 500}}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{ position: 'fixed', bottom: 0,width:1}}
        onChange={handleChange}
      >
        <BottomNavigationAction  LinkComponent={NavLink}  value='0' to='/' label="Home" icon={<HomeRoundedIcon /> } />
        <BottomNavigationAction LinkComponent={NavLink} value='1' to='/activity' label="Activity" icon={<RestoreIcon  />} />
        <BottomNavigationAction LinkComponent={NavLink} value='2' to='/account' label="Account" icon={<PersonIcon  />} />
      </BottomNavigation>
    </Box>
  );
}
export default Footer;