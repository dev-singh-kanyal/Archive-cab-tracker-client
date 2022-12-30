import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from "../media/logo2.png"
import { createTheme,ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const textFieldProps = {
  margin: "normal",
  variant: "filled",
  required: true,
  fullWidth: true,
  autoComplete: "off",
  className: 'myfield',
}

 
export function SignIn() {

  const checkUser = async (user) => {
    const response = await fetch('http://127.0.0.1:5050/users/login', {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: "same-origin",
      headers: {
        'Content-type': 'application/json'
      },
    })

    if (!response.ok) alert(`An error occured ${response.statusText}`);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get('email'),
      password: data.get('password'),
    }
    checkUser(user);
  };

  return (
    <>
    <div className='mainComponent'>
      <ThemeProvider theme={theme} >
        <Container   className="signinBox" maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={logo} style={{ width: "100px", height: "auto" ,padding:"20px"}} alt=""></img>
            <Typography component="h1" variant="h5" sx={{color:"white"}}>
              Sign in
            </Typography>
            
            <div className='formInputElement'>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 ,padding:"30px",color:"black",borderColor:"white"}}>
              <TextField
                {...textFieldProps}
                label="Email Address"
                id="email"
                name="email"
              />
              <TextField
                {...textFieldProps}
                label="Password"
                id="password"
                name="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,background:"green"}}
              >
                Sign In
              </Button>
            </Box>
            </div>
          </Box>

        
        </Container>
      </ThemeProvider>
    </div>
    </>
  );
}

export default SignIn