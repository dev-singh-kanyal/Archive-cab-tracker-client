
import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';

import {
  makeStyles,
  Box,
} from "@material-ui/core";

import PersonIcon from '@mui/icons-material/Person';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",  
    width:"100%"
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    padding:"5px",
    borderRadius:"1.3rem",
    width:"60px",
    fontSize: "12px",
    "&:hover": {
      color: "gray",
      border:"2px solid black",
      //borderBottom: "1px solid white",
    },
  },

}));


export function Footer() {
  const classes = useStyles();
 
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  const [value, setValue] = React.useState(0);
  return (
      <Box sx={{ width: 500}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" to-link="/" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction label="Activity" to-link="#" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Account" to-link="/account" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}
export default Footer;