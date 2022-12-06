import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
/*import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';*/
import { getDatabase, ref, child, get } from "firebase/database";
import { useState } from 'react'
//import { currentUser } from 'firebase/auth';
import { useAuth } from '../Contexts/AuthContext'

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import firebase from 'firebase/compat/app';


const prof = [
  {
    email: '',
    firstName: '',
    lastName: '',
    addOne: '',
    addTwo: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  }
];

const payment = [
  {
    name: '',
    cardnum: '',
    exp: '',
    cvv: '',
  }
];


export default function Profile(){
  //const [currentUser, logout] = useAuth()
  const [userId, getUserId] = useState()
  const dbRef = ref(getDatabase());
  const navigate = useNavigate()
  let user = firebase.auth().currentUser;
  const routeChange = () => navigate(`/EditPage/${user.uid}`)
  const [currentUser, setCurrentUser] = useState()

  const [name, getName] = useState()
  const [last, getLast] = useState()
  const [addone, getAddone] = useState()
  const [addtwo, getAddtwo] = useState()
  const [city, getCity] = useState()
  const [state, getState] = useState()
  const [zip, getZip] = useState()
  const [country, getCountry] = useState()

  const db = getDatabase();
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      const uid = user.uid;


get(child(dbRef, `users/${uid}`)).then((snapshot) => {
  if (snapshot.exists()) {
    //console.log(snapshot.val());
    const val = snapshot.val();
    return val;
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}}
)
            

  return(
    <Typography>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <h1>
            <center>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <AccountCircleIcon />
              </Avatar>
              Profile
            </center>
          </h1>
          {prof.map((pro) => (
              <React.Fragment>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          Email Address: {pro.email}
        </Grid>
        <Grid item xs={12} sm={6}>
          First Name: {pro.firstName}
        </Grid>
        <Grid item xs={12} sm={6}>
          Last Name: {pro.lastName}
        </Grid>
        <Grid item xs={12}>
          Address Line 1: {pro.addOne}
        </Grid>
        <Grid item xs={12}>
          Address Line 2: {pro.addTwo}
        </Grid>
        <Grid item xs={12} sm={6}>
          City: {pro.city}
        </Grid>
        <Grid item xs={12} sm={6}>
          State: {pro.state}
        </Grid>
        <Grid item xs={12} sm={6}>
          Zip code: {pro.zip}
        </Grid>
        <Grid item xs={12} sm={6}>
          Country: {pro.country}
        </Grid>
      </Grid>
    </React.Fragment>
    ))}
      <div><br></br></div>
            {payment.map((pay) => (
              <React.Fragment>
              <Typography variant="h6" gutterBottom>
                 <h3>
                  <center>
                    Payment method
                  </center>
                </h3>
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  Cardholder Name: {pay.name}
                </Grid>
                <Grid item xs={12} md={6}>
                  Card Number: {pay.cardnum}
                </Grid>
                <Grid item xs={12} md={6}>
                  Expiration Date: {pay.exp}
                </Grid>
                <Grid item xs={12} md={6}>
                  CVV: {pay.cvv}
                </Grid>
              </Grid>
            </React.Fragment>
            ))}


          <Grid item xs={12} md={6}>
                  <Button
                    onClick={routeChange}
                    type="submit"
                    fullWidth
                    variant="contained"
                    style= {{ backgroundColor: 'red'}}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Edit
                  </Button>
          </Grid>
        </Paper>
      </Container>
    </Typography>
  );
}