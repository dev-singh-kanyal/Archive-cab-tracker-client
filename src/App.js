import { React, useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { SignIn, Client, Account, Activity, ProtectedComponent } from "./components"
import './styles/index.scss'
import { checkAuth } from "./helpers/helpers"

function App() {
  const [isAuth, setIsAuth] = useState(null)
  const handleUserState = (res) => {
    console.log(res);
    if (res.isAuth) setIsAuth(true);
    else setIsAuth(false);
  }

  useEffect(() => {
    checkAuth().then(res => {
      console.log(res)
      if (res.isAuth) setIsAuth(true);
      else setIsAuth(false);
    })
  }, [])

  const ProtectedCompProps = {
    userState: isAuth,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <ProtectedComponent {...ProtectedCompProps} handleUserState={handleUserState}>
            <Client />
          </ProtectedComponent>
        } />

        <Route exact path="/login" element={
          <SignIn />
        } />

        <Route exact path="/account" element={
          <ProtectedComponent {...ProtectedCompProps} handleUserState={handleUserState} >
            <Account />
          </ProtectedComponent>
        } />

        <Route exact path="/activity" element={
          <ProtectedComponent {...ProtectedCompProps} handleUserState={handleUserState}>
            <Activity />
          </ProtectedComponent>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
