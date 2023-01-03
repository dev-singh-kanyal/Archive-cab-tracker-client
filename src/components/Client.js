import {React,useState} from 'react'
import logo from "../media/logo2.png"
import LayoutComponent from "../layout/layoutcomponent"

import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';
import {useNavigate} from "react-router-dom"
import { useEffect } from 'react';

const Client=({driver})=> {

  const [checked, setChecked] = useState(true);
  const history = useNavigate();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    
    <>
      <LayoutComponent>
      <div className='userDetails'>
        <div className='Icons'>
          <div className='type'>
          <img src="https://img.icons8.com/bubbles/50/null/user.png"/>
          <span style={{fontSize:"12px",paddingRight:"10px"}}>{driver.driverName}</span>
          </div>

          <div className='type'>
          <img src="https://img.icons8.com/color/40/null/interstate-truck.png"/>
          <span style={{fontSize:"12px"}}>{driver.vehicle.vehicleName}</span>
          </div>


          <div className='VehicleNo'>
            <div className='Plate' style={{fontWeight:"bold"}}>
              IND 
              <br/>
              <img src={logo} style={{width:"20px", height:"auto"}} alt=""></img>
            </div>
            <div className='Number'>
              {driver.vehicle.vehicleNo}
            </div>
          </div>

        
        <div className='Company'>
          <div className='type'>
          <span style={{fontSize:"large"}}>Indian Oil Corp. Ltd</span>
          </div>

          <div className='type'>
            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/30/null/external-distance-maps-and-locations-those-icons-lineal-color-those-icons.png" alt="distance-travelled"/>
            <span>Distace Travelled</span>
          </div>
          
          <div className='type' style={{gap:"10px"}}>
            <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/30/null/external-distance-maps-and-locations-those-icons-lineal-color-those-icons-1.png" alt=""/>
            <span>Overall Distance</span>
            <div>
          </div>
          <div>
          <FormControlLabel control={<Switch 
          onChange={handleChange}
          defaultChecked />} label="Enabled Location" />
          </div>
          </div>
          </div>

        </div>
      </div>

      </LayoutComponent>
    </>
   
  )
}

export default Client