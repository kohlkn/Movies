//import * as React from 'react';
//import { useRef } from 'react';
import React, { useRef, useState } from "react"
import { Form, /*Button, Card, */Alert } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, sendEmailVerification } from 'firebase/auth'

//import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './SignUpLogin.css'
//import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//const theme = createTheme();

export default function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const checkRef = useRef()
  const auth = getAuth()

  async function handleSubmit(event) {
    event.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
      });
      navigate("/RegistrationConfirm")

    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>

        <center>

          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <br/>
          {/* <TextField
                  autoComplete="email"
                  name="email"
                  required
                  halfWidth
                  id="email"
                  label="Email"
                  autoFocus
                  inputProps= {{ style: { color:'black' }}}
                  color='error'
                  ref={emailRef}
                />
                            <br/>
          <TextField
                  autoComplete="password"
                  name="password"
                  required
                  halfWidth
                  id="password"
                  label="Password"
                  autoFocus
                  inputProps= {{ style: { color:'black' }}}
                  color='error'
                  type='password'
                  ref={passwordRef}
                />
                            <br/>
          <TextField
                  autoComplete="passwordconfirm"
                  name="passwordconfirm"
                  required
                  halfWidth
                  id="passwordconfirm"
                  label="Confirm Password"
                  autoFocus
                  inputProps= {{ style: { color:'black' }}}
                  color='error'
                  type='password'
                  ref={passwordConfirmRef}
                /> */}
            <Form.Group id="email" class='email'>
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <br/>
            <Form.Group id="password" class='password'>
              <Form.Label>Password </Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <br/>
            <Form.Group id="password-confirm" class='passconf'>
              <Form.Label>Password Confirmation </Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <br/>
            <Form.Group id="checkbox">
              <Form.Label>Register for promo</Form.Label>
              <Form.Control type="checkbox" ref={checkRef} />
            </Form.Group>
            <Button
              type="submit"
              halfWidth
              variant="contained"
              style= {{ backgroundColor: 'red'}}
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Sign Up
            </Button>
          </Form>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/SignIn" variant="body2" underline='none' style= {{ color: 'red'}}>Log In</Link>
      </div>
      </center>

    </>
    
  )

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  /*const [message, setMessage] = React.useState('');

  const handleChange = event => {
    setMessage(event.target.value);
    //console.log('value is: ', event.target.value);
  }*/


  // return (
  //   <ThemeProvider theme={theme}>
  //     <Container component="main" maxWidth="xs">
  //       <CssBaseline />
  //       <Box
  //         sx={{
  //           marginTop: 8,
  //           display: 'flex',
  //           flexDirection: 'column',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
  //           <LockOutlinedIcon />
  //         </Avatar>
  //         <Typography component="h1" variant="h5">
  //           Sign up
  //         </Typography>
  //         {error && <Alert variant="danger">{error}</Alert>}
  //         <Form /*component="form" noValidate*/ onSubmit={handleSubmit} sx={{ mt: 3 }}>
  //           <Grid container spacing={2}>
  //             {/* <Grid item xs={12} sm={6}>
  //               <TextField
  //                 autoComplete="given-name"
  //                 name="firstName"
  //                 required
  //                 fullWidth
  //                 id="firstName"
  //                 label="First Name"
  //                 autoFocus
  //                 inputProps= {{ style: { color:'black' }}}
  //                 color='error'
  //               />
  //             </Grid>
  //             <Grid item xs={12} sm={6}>
  //               <TextField
  //                 required
  //                 fullWidth
  //                 id="lastName"
  //                 label="Last Name"
  //                 name="lastName"
  //                 autoComplete="family-name"
  //                 color='error'
  //               />
  //             </Grid> */}
  //             <Grid item xs={12}>
  //               <TextField
  //                 required
  //                 fullWidth
  //                 id="email"
  //                 label="Email Address"
  //                 name="email"
  //                 autoComplete="email"
  //                 color='error'
  //                 //onChange={handleChange}
  //                 //value={message}
  //                 ref={emailRef}
  //               />
  //             </Grid>
  //             <Grid item xs={12}>
  //               <TextField
  //                 required
  //                 fullWidth
  //                 name="password"
  //                 label="Password"
  //                 type="password"
  //                 id="password"
  //                 autoComplete="new-password"
  //                 color='error'
  //                 ref={passwordRef}
  //               />
  //             </Grid>
  //             <Grid item xs={12}>
  //               <TextField
  //                 required
  //                 fullWidth
  //                 name="passwordConfirm"
  //                 label="Confirm Password"
  //                 type="password"
  //                 id="passwordConfirm"
  //                 autoComplete="new-password-confirm"
  //                 color='error'
  //                 ref={passwordConfirmRef}
  //               />
  //             </Grid>
  //             <Grid item xs={12}>
  //               <FormControlLabel
  //                 control={<Checkbox value="allowExtraEmails" style= {{ color: 'red'}} />}
  //                 label="I want to receive inspiration, marketing promotions and updates via email."
  //               />
  //             </Grid>
  //           </Grid>
  //           <Button
  //             type="submit"
  //             fullWidth
  //             variant="contained"
  //             style= {{ backgroundColor: 'red'}}
  //             sx={{ mt: 3, mb: 2 }}
  //             disabled={loading}
  //           >
  //             Sign Up
  //           </Button>
  //           <Grid container justifyContent="flex-end">
  //             <Grid item>
  //               <Link href="/SignIn" variant="body2" underline='none' style= {{ color: 'red'}}>
  //                 Already have an account? Sign in
  //               </Link>
  //               <div>{}</div>
  //             </Grid>
  //           </Grid>
  //         </Form>
  //       </Box>
  //       <Copyright sx={{ mt: 5 }} />
  //     </Container>
  //   </ThemeProvider>
  // );
}