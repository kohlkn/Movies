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
import { useState, useEffect } from 'react'
//import { currentUser } from 'firebase/auth';
import { useAuth } from '../Contexts/AuthContext'
import { collection, deleteDoc, onSnapshot, doc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import firebase from 'firebase/compat/app';
import { db } from '../firebase';
import "firebase/auth";
import './MainPage.css'


export default function Profile(){
  //const [currentUser, logout] = useAuth()
  const [userId, getUserId] = useState()
  const dbRef = ref(getDatabase());
  const navigate = useNavigate()
  let user = firebase.auth().currentUser;
  const routeChange = () => navigate(`/EditPage/${user.uid}`)
  const [currentUser, setCurrentUser] = useState()

  // const [name, getName] = useState()
  // const [last, getLast] = useState()
  // const [addone, getAddone] = useState()
  // const [addtwo, getAddtwo] = useState()
  // const [city, getCity] = useState()
  // const [state, getState] = useState()
  // const [zip, getZip] = useState()
  // const [country, getCountry] = useState()
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(false);

  

  //const db = getDatabase();
  let userlog = firebase.auth().currentUser;
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      const uid = user.uid;
      


// get(child(dbRef, `users/${uid}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     //console.log(snapshot.val());
//     const val = snapshot.val();
//     return val;
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

}}

)
/*
const fetchUsers = async () => {
  const res = db.collection('users')
  const data = await res.get()
  data.docs.forEach(item => {
    setUsers([...users, item.data()])
  })
}
useEffect(() => {
  fetchUsers()
}, [])*/
useEffect(() => {
  setLoading(true);
  //the collection db, "movies" calls upon a database named movies in the firebase setup
  const unsub = onSnapshot(collection(db,"users"), (snapshot) => {
    let list = [];
    snapshot.docs.forEach((doc) => {
      if(doc.id == user.uid){
      list.push({id: doc.id, ...doc.data()})
      }
    });
    setUsers(list);
    //setSearchResults(list);
    setLoading(false)

  }, (error)=> {
    console.log(error);
  });
  return () => {
    unsub();
  };
}, []);
            

  return(
    <div>
      {users && users.map((item) => (
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <h1>
            <center>
              <Avatar sx={{ m: 1, bgcolor: 'red' }}>
                <AccountCircleIcon/>
              </Avatar>
              Profile
            </center>
          </h1>
              <React.Fragment>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          Email Address: <div class='items'>{user.email}</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          First Name: <div class='items'>{item.name}</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          Last Name: <div class='items'>{item.last}</div>
        </Grid>
        <Grid item xs={12}>
          Address Line 1: <div class='items'>{item.addone}</div>
        </Grid>
        <Grid item xs={12}>
          Address Line 2: <div class='items'>{item.addtwo}</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          City: <div class='items'>{item.city}</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          State: <div class='items'>{item.state}</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          Zip code: <div class='items'>{item.zip}</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          Country: <div class='items'>{item.country}</div>
        </Grid>
      </Grid>
    </React.Fragment>
      <div><br></br></div>
              <React.Fragment>
              <div variant="h6" gutterBottom>
                 <h2>
                  <center><b>
                    Payment method
                    </b></center>
                </h2>
              </div>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  Cardholder Name: <div class='items'>{item.cardname}</div>
                </Grid>
                <Grid item xs={12} md={6}>
                  Card Number: <div class='items'>{item.cardnum}</div>
                </Grid>
                <Grid item xs={12} md={6}>
                  Expiration Date: <div class='items'>{item.exp}</div>
                </Grid>
                <Grid item xs={12} md={6}>
                  CVV: <div class='items'>{item.cvv}</div>
                </Grid>
              </Grid>
            </React.Fragment>


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
      ))}
    </div>
  );
}