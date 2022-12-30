import { BrowserRouter, Routes, Route } from "react-router-dom"
import {SignIn} from './components/SignIn'
import {Client} from './components/Client'
import {Account} from "./components/Account"
import {Activity} from './components/Activity'
import './styles/index.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route exact path="/" element={
          <Client/>
        } />  
    
        <Route exact path="/login" element={
          <SignIn/>
        } />   

        <Route exact path ="/account" element={
          <Account/>
        } />   

        <Route exact path ="/activity" element={
          <Activity/>
        } /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
