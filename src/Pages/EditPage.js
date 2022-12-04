// //import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../Contexts/AuthContext"
// import { Link, useNavigate } from "react-router-dom"

// export default function EditPage() {

//   const fnRef = useRef();
//   const { info } = useAuth()
//   const [error, setError] = useState("")
//   const [message, setMessage] = useState("")
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()

//   async function handleSubmit(e) {
//     e.preventDefault()

//     try {
//       setError("")
//       setLoading(true)
//       await info(fnRef.current.value)
//       navigate('/Profile')
//     } catch {
//       setError("Failed to change info")
//     }

//     setLoading(false)
//   }

//   return(
// <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
//   <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
//   <Form onSubmit={handleSubmit}>
//     <h1>
//       <center>
//         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//           <AccountCircleIcon />
//         </Avatar>
//         Edit Profile
//       </center>
//     </h1>
//     <React.Fragment>
//       <Grid container spacing={3}>
//       {/* <Grid item xs={12}>
//           <TextField
//             id="password"
//             name="password"
//             label="Password"
//             fullWidth
//             autoComplete="password"
//             variant="standard"
//             color='error'
//           />
//         </Grid> */}
//         <Form.Group id="name">
//               <Form.Label>first name</Form.Label>
//               <Form.Control type="name" ref={fnRef} />
//             </Form.Group>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             id="firstName"
//             name="firstName"
//             label="First name"
//             fullWidth
//             autoComplete="given-name"
//             variant="standard"
//             color='error'
//             ref={fnRef}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             id="lastName"
//             name="lastName"
//             label="Last name"
//             fullWidth
//             autoComplete="family-name"
//             variant="standard"
//             color='error'
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="address1"
//             name="address1"
//             label="Address line 1"
//             fullWidth
//             autoComplete="shipping address-line1"
//             variant="standard"
//             color='error'
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="address2"
//             name="address2"
//             label="Address line 2"
//             fullWidth
//             autoComplete="shipping address-line2"
//             variant="standard"
//             color='error'
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             id="city"
//             name="city"
//             label="City"
//             fullWidth
//             autoComplete="shipping address-level2"
//             variant="standard"
//             color='error'
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             id="state"
//             name="state"
//             label="State/Province/Region"
//             fullWidth
//             variant="standard"
//             color='error'
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             id="zip"
//             name="zip"
//             label="Zip / Postal code"
//             fullWidth
//             autoComplete="shipping postal-code"
//             variant="standard"
//             color='error'
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             id="country"
//             name="country"
//             label="Country"
//             fullWidth
//             autoComplete="shipping country"
//             variant="standard"
//             color='error'
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//     <div><br></br></div>
//     <React.Fragment>
//     <Typography variant="h6" gutterBottom>
//        <h3>
//         <center>
//           Payment method
//         </center>
//       </h3>
//     </Typography>
//     <Grid container spacing={3}>
//       <Grid item xs={12} md={6}>
//         <TextField
//           id="cardName"
//           label="Name on card"
//           fullWidth
//           autoComplete="cc-name"
//           variant="standard"
//           color='error'
//         />
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <TextField
//           id="cardNumber"
//           label="Card number"
//           fullWidth
//           autoComplete="cc-number"
//           variant="standard"
//           color='error'
//         />
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <TextField
//           id="expDate"
//           label="Expiry date"
//           fullWidth
//           autoComplete="cc-exp"
//           variant="standard"
//           color='error'
//         />
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <TextField
//           id="cvv"
//           label="CVV"
//           helperText="Last three digits on signature strip"
//           fullWidth
//           autoComplete="cc-csc"
//           variant="standard"
//           color='error'
//         />
//       </Grid>
//       <Grid item xs={12} md={6}>
//         {/* <Button
//           // onClick={handleSubmit}
//           type="submit"
//           fullWidth
//           variant="contained"
//           style= {{ backgroundColor: 'red'}}
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Confirm
//         </Button> */}
//         <Button
//           // onClick={handleSubmit}
//           type="submit"
//           fullWidth
//           variant="contained"
//           style= {{ backgroundColor: 'red'}}
//           sx={{ mt: 3, mb: 2 }}
//           disabled={loading}
//           className="w-100"
//         >
//           Confirm
//         </Button>
//       </Grid>
//     </Grid>
//   </React.Fragment>
// </Form>
// </Paper>
// </Container>
    
//   );
// }

import {useState} from 'react';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

// function Edit() {
// const [name , setName] = useState();
// const [age , setAge] = useState();
	
// // Push Function
// const Push = () => {
// 	database.ref("user").set({
// 	name : name,
// 	age : age,
// 	}).catch(alert);
// }


function Edit(/*userId, name, age, last*/) {

  const [UID, getUID] = useState()
  const [name, setName] = useState()
  const [last, setLast] = useState()
  const [addone, setAddone] = useState()
  const [addtwo, setAddtwo] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zip, setZip] = useState()
  const [country, setCountry] = useState()

  const [oldpassword, setOldpassword] = useState()
  const [newpassword, setNewpassword] = useState()

  const [cardname, setCardname] = useState()
  const [cardnum, setCardnum] = useState()
  const [exp, setExp] = useState()
  const [cvv, setCvv] = useState()
  const auth = getAuth()
  const [currentUser, setCurrentUser] = useState()
  const navigate = useNavigate()

  let user = firebase.auth().currentUser;
  console.log(user.uid)
  console.log(user.email)
  console.log(user.password)

const Push = () => {
  const db = getDatabase();
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      const uid = user.uid;

  set(ref(db, `/users/${uid}`), {
    firstname: name,
    lastname: last,
    addone: addone,
    addtwo: addtwo,
    city: city,
    state: state,
    zip: zip,
    country: country,
    /*oldpassword: oldpassword,
    newpassword: newpassword,
    cardname: cardname,
    cardnum: cardnum,
    exp: exp,
    cvv: cvv,*/

  });
}
});
  navigate('/Profile')
}


return (
	<div className="App" style={{marginTop : 50}}>
    <h1>Edit Profile</h1>
	<center>

  <input type='password' placeholder="Enter new Old Password" value={oldpassword}
	onChange={(e) => setOldpassword(e.target.value)}/>
	<br/><br/>

  <input type='password' placeholder="Enter new New Password" value={newpassword}
	onChange={(e) => setNewpassword(e.target.value)}/>
	<br/><br/>

	<input placeholder="Enter your First Name" value={name}
	onChange={(e) => setName(e.target.value)}/>
	<br/><br/>

  <input placeholder="Enter your Last Name" value={last}
	onChange={(e) => setLast(e.target.value)}/>
	<br/><br/>

  <input placeholder="Enter your Address Line 1" value={addone}
	onChange={(e) => setAddone(e.target.value)}/>
	<br/><br/>

  <input placeholder="Enter your Address Line 2" value={addtwo}
	onChange={(e) => setAddtwo(e.target.value)}/>
	<br/><br/>

  <input placeholder="Enter your City" value={city}
	onChange={(e) => setCity(e.target.value)}/>
	<br/><br/>

  <input placeholder="Enter your State" value={state}
	onChange={(e) => setState(e.target.value)}/>
	<br/><br/>

  <input placeholder="Enter your Zip" value={zip}
	onChange={(e) => setZip(e.target.value)}/>
	<br/><br/>

  <input placeholder="Enter your Country" value={country}
	onChange={(e) => setCountry(e.target.value)}/>
	<br/><br/>

  <input placeholder="Enter the Cardholder Name" value={cardname}
	onChange={(e) => setCardname(e.target.value)}/>
	<br/><br/>

  <input placeholder="Enter your Card Number" value={cardnum}
	onChange={(e) => setCardnum(e.target.value)}/>
	<br/><br/>

  <input placeholder="Enter Expiration Date" value={exp}
	onChange={(e) => setExp(e.target.value)}/>
	<br/><br/>

  <input placeholder="Enter CVV" value={cvv}
	onChange={(e) => setCvv(e.target.value)}/>
	<br/><br/>
  
  <input type='checkbox'/> Promo?
  <br/><br/>

	<Button
    type="submit"
    halfWidth
    variant="contained"
    style= {{ backgroundColor: 'red'}}
    sx={{ mt: 3, mb: 2 }}
    onClick={Push}
    >
      Update Profile
    </Button>
	</center>
	</div>
);
}

export default Edit;

