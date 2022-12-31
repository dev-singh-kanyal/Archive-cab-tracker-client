import {React,useState} from 'react'
import logo from "../media/logo2.png"
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import  {Box} from '@material-ui/core'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import RestoreIcon from '@mui/icons-material/Restore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../layout/Footer'
export function Account() {
  const [value, setValue] = useState(0);
  return (
    <>
    <div className='UserAuth'>
    <div className='userDetails'  style={{top:"20px"}}>
        <div className='Icons'>
          <div className='type'>
          <img src="https://img.icons8.com/bubbles/80/null/user.png"/>
          <span style={{fontSize:"16px",paddingRight:"10px"}}>User name</span>
          </div>

          <div className='type'>
          <img src="https://img.icons8.com/color/80/null/interstate-truck.png"/>
          <span style={{fontSize:"16px"}}>Vehicle name</span>
          </div>

          <div className='VehicleNo' style={{marginLeft:"5%"}}>
            <div className='Plate' style={{fontWeight:"bold"}}>
              IND 
              <br/>
              <img src={logo} style={{width:"20px", height:"auto"}} alt=""></img>
            </div>
            <div className='Number'>
              AS-18 32D 28 
            </div>
          </div>
        </div>
      </div>

    <div style={{display:"flex",justifyContent:"center",marginTop:"40px",opacity:"0.8"}}> 
      <Button variant="contained" color="error" >
        Log Out
        </Button>
    </div>
    <div className='footerLogo'>
      <img src={logo} style={{width:"80px",zIndex:"0"}}>

      </img>
    </div>
    </div>
     <Footer/>
    </>
  )
}

export default Account