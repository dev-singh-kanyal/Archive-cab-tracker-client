import React from "react";
import {HomeRounded,Restore,Person} from '@mui/icons-material';
import {BottomNavigation,BottomNavigationAction} from '@mui/material';
import { NavLink, useNavigate } from "react-router-dom";
import {Box, makeStyles} from "@material-ui/core";

export function Footer() {
  const history = useNavigate();
  const [value, setValue] = React.useState(0);
  const updateRoute=(route)=>{
    history(route)
  }

  return (
      <Box sx={{ width: 500}}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{ position: 'fixed', bottom: 0,width:1}}
      >
        <BottomNavigationAction  LinkComponent={NavLink}  value='0' to='/' label="Home" icon={<HomeRounded /> } />
        <BottomNavigationAction LinkComponent={NavLink} value='1' to='/activity' label="Activity" icon={<Restore  />} />
        <BottomNavigationAction LinkComponent={NavLink} value='2' to='/account' label="Account" icon={<Person  />} />
      </BottomNavigation>
    </Box>
  );
}
export default Footer;