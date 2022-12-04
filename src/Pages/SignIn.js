// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="app">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();
// //const getEmail = document.querySelector('TextField[id="email"]');
// //const em = getEmail.value;

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               color='error'
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               color='error'
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" style= {{ color: "red" }} />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               style= {{ backgroundColor: 'red'}}
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2" underline='none' style= {{ color: 'red'}}>
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/SignUp" variant="body2" underline='none' style= {{ color: 'red'}}>
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

import React, { useRef, useState } from "react"
import { Form, /*Button, */Card, Alert } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Button from '@mui/material/Button'
import './SignUpLogin.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/MainPage")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <center>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" class='email'>
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <br/>
            <Form.Group id="password" class='password'>
              <Form.Label>Password </Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button
              type="submit"
              halfWidth
              variant="contained"
              style= {{ backgroundColor: 'red'}}
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Sign In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/ForgotPassword" variant="body2" underline='none' style= {{ color: 'red'}}>Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <br/>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/SignUp" variant="body2" underline='none' style= {{ color: 'red'}}>Sign Up</Link>
      </div>
      </center>
    </>
  )
}
