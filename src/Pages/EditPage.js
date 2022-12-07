// //import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
//import Button from '@mui/material/Button';
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
//   const { addone } = useAuth()
//   const [error, setError] = useState("")
//   const [message, setMessage] = useState("")
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()

//   async function (e) => setData({ name: e.target.value })(e) {
//     e.preventDefault()

//     try {
//       setError("")
//       setLoading(true)
//       await addone(fnRef.current.value)
//       navigate('/Profile')
//     } catch {
//       setError("Failed to change addone")
//     }

//     setLoading(false)
//   }

//   return(
// <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
//   <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
//   <Form onSubmit={(e) => setData({ name: e.target.value })}>
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
//           // onClick={(e) => setData({ name: e.target.value })}
//           type="submit"
//           fullWidth
//           variant="contained"
//           style= {{ backgroundColor: 'red'}}
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Confirm
//         </Button> */}
//         <Button
//           // onClick={(e) => setData({ name: e.target.value })}
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
////////////////////////////////////////////////////
// import {useState} from 'react';
// import firebase from 'firebase/compat/app';
// import { getDatabase, ref, set } from "firebase/database";
// import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'

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


// function Edit(/*userId, name, age, last*/) {

//   const [UID, getUID] = useState()
//   const [name, setName] = useState()
//   const [last, setLast] = useState()
//   const [addone, setAddone] = useState()
//   const [addtwo, setAddtwo] = useState()
//   const [city, setCity] = useState()
//   const [state, setState] = useState()
//   const [zip, setZip] = useState()
//   const [country, setCountry] = useState()

//   const [oldpassword, setOldpassword] = useState()
//   const [newpassword, setNewpassword] = useState()

//   const [cardname, setCardname] = useState()
//   const [cardnum, setCardnum] = useState()
//   const [exp, setExp] = useState()
//   const [cvv, setCvv] = useState()
//   const auth = getAuth()
//   const [currentUser, setCurrentUser] = useState()
//   const navigate = useNavigate()

//   let user = firebase.auth().currentUser;
//   // console.log(user.uid)
//   // console.log(user.email)
//   // console.log(user.password)

// const Push = () => {
//   const db = getDatabase();
//   firebase.auth().onAuthStateChanged((user) => {
//     if(user) {
//       const uid = user.uid;

//   set(ref(db, `/users/${uid}`), {
//     firstname: name,
//     lastname: last,
//     addone: addone,
//     addtwo: addtwo,
//     city: city,
//     state: state,
//     zip: zip,
//     country: country,
//     /*oldpassword: oldpassword,
//     newpassword: newpassword,
//     cardname: cardname,
//     cardnum: cardnum,
//     exp: exp,
//     cvv: cvv,*/

//   });
// }

import React, {useState,useEffect} from 'react';
import {Form, Grid, Loader} from 'semantic-ui-react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import {storage, db} from '../firebase'
import {useParams, useNavigate} from 'react-router-dom'
import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage';
import { addDoc,updateDoc, collection, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import "firebase/auth";



const initialState = {
  name: "",
  last:  "",
  addone:  "",
  addtwo:  "",
  city: "",
  state: "",
  zip: "",
  country: '',
  cardname: '',
  cardnum: '',
  exp: '',
  cvv: ''

}
const Edit = () => {
  let user = firebase.auth().currentUser;
  console.log(user.email)
  const userid = user.uid
  console.log(userid)

  const [data, setData] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const {name,last,addone, addtwo, city,state,zip,country,cardname,cardnum,exp,cvv} = data;
  const navigate = useNavigate();
  const {id} = useParams();
  

  useEffect(() => {
    id && getSingleMovie();
  }, [id])

  const getSingleMovie = async () => {
    //movies is the collection name within firebase 
    const docRef = doc(db, "users", id);
    const snapshot = await getDoc(docRef);
    if(snapshot.exists()) {
      setData({...snapshot.data()});
    }
  };


  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      console.log(name)
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        switch(snapshot.state) {
          case "paused":
            console.log("upload is paused");
            break;
          case "running":
            console.log("upload is running");
            break;
          default:
            break;
        }
      }, (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData((prev) => ({...prev, img: downloadURL}));
        });
      }
      );
    };
    file && uploadFile();
  }, [file]);


const handleChange = (e) => {
  setData({...data, [e.target.name]: e.target.value})
};

const validate = () => {
  let errors = {};
  if(!name){
    errors.name = "name is required";
  }
  if(!last){
    errors.last = "last is required";
  }
  if(!addone){
    errors.addone = "address line one is required";
  }
  // if(!addtwo){
  //   errors.addtwo = "addtwo is required";
  // }
  if(!city){
    errors.city = "city is required";
  }
  if(!state){
    errors.state = "state is required";
  }
  if(!zip){
    errors.zip = "zip is required";
  }
  if(!country){
    errors.country = "country is required";
  }
  return errors;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  let errors = validate();
  if(Object.keys(errors).length) return setErrors(errors);
  setIsSubmit(true);
  if(!id){
  //   try{
  //     await addDoc(collection(db, "users"),{
  //       ...data,
  //       timestamp: serverTimestamp(),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
try{
      await setDoc(doc(db, "users",userid),{
        ...data,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  }

  else{
    try{
      await updateDoc(doc(db, "users",userid),{
        ...data,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  }
  

    //after creating a new movie, navigate to the home page
    navigate("/Profile");
};
  return (
    <div>
      <center>
      <Grid centered verticalAlign='middle' columns = "3" style = {{height: "80 vh"}}>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <div>
              {isSubmit ?( <Loader active inline = "centered" size = "huge" />): (
                <>
                <Form onSubmit = {handleSubmit}>
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                 <h1>
                  <center>
                    <Avatar sx={{ m: 1, bgcolor: 'red' }}>
                    <AccountCircleIcon />
                    </Avatar>
                    Edit Profile
                  </center>
                </h1>
              <React.Fragment>
      <Grid container spacing={3}>
        <Grid class='forminput' item xs={12} sm={6}>
          <Form.Input 
                  label = "First Name"
                  error={errors.name ? {content:errors.name} : null}
                  placeholder = "Enter First Name"
                  name = "name"
                  onChange={handleChange}
                  value = {name}
                  autoFocus
                  />
                  <br></br>
        </Grid>
        <Grid class='forminput' item xs={12} sm={6}>
          <Form.Input 
                  label = "Last Name"
                  error={errors.last ? {content:errors.last} : null}
                  placeholder = "Enter last"
                  name = "last"
                  onChange={handleChange}
                  value = {last}
                  /> 
                  <br></br>
        </Grid>
        <Grid class='forminput' item xs={12}>
          <Form.Input 
                  label = "Address Line 1"
                  error={errors.addone ? {content:errors.addone} : null}
                  placeholder = "Enter addone"
                  name = "addone"
                  onChange={handleChange}
                  value = {addone}
                  />
                  <br></br>
        </Grid>
        <Grid class='forminput' item xs={12}>
          <Form.Input 
                  label = "Address Line 2"
                  error={errors.addtwo ? {content:errors.addtwo} : null}
                  placeholder = "Enter addtwo"
                  name = "addtwo"
                  onChange={handleChange}
                  value = {addtwo}
                  />
                  <br></br>
        </Grid>
        <Grid class='forminput' item xs={12} sm={6}>
          <Form.Input
                  label = "City"
                  placeholder = "Enter Release Date here"
                  name = "city"
                  onChange={handleChange}
                  value = {city}
                  />
                  <br></br>
        </Grid>
        <Grid class='forminput' item xs={12} sm={6}>
          <Form.Input
                  label = "State"
                  placeholder = "enter your state here"
                  name = "state"
                  onChange={handleChange}
                  value = {state}
                  />
                  <br></br>
        </Grid>
        <Grid class='forminput' item xs={12} sm={6}>
          <Form.Input
                  label = "Zip Code"
                  placeholder = "Please enter your zip here"
                  name = "zip"
                  onChange={handleChange}
                  value = {zip}
                  />
                  <br></br>
        </Grid>
        <Grid class='forminput' item xs={12} sm={6}>
          <Form.Input
                  label = "Country"
                  placeholder = "Please enter your country here"
                  name = "country"
                  onChange={handleChange}
                  value = {country}
                  />
                  <br></br>
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
                <Grid class='forminput' item xs={12} md={6}>
                  <Form.Input
      
                  label = "Cardholder Name"
                  placeholder = "Please enter cardholder name"
                  name = "cardname"
                  onChange={handleChange}
                  value = {cardname}
                  />
                  <br></br>
                </Grid>
                <Grid class='forminput' item xs={12} md={6}>
                  <Form.Input
      
                  label = "Card Number"
                  placeholder = "Please enter your card number"
                  name = "cardnum"
                  onChange={handleChange}
                  value = {cardnum}
                  />
                  <br></br>
                </Grid>
                <Grid class='forminput' item xs={12} md={6}>
                  <Form.Input
      
                  label = "Expiration Date"
                  placeholder = "Please enter card expiration date"
                  name = "exp"
                  onChange={handleChange}
                  value = {exp}
                  />
                  <br></br>
                </Grid>
                <Grid class='forminput' item xs={12} md={6}>
                  <Form.Input
      
                  label = "CVV"
                  placeholder = "Please enter your cvv"
                  name = "cvv"
                  onChange={handleChange}
                  value = {cvv}
                  />
                </Grid>
              </Grid>
            </React.Fragment>


          <Grid item xs={12} md={6}>
          <Button primary 
                  type = "submit" 
                  halfWidth
                  variant="contained"
                  style= {{ backgroundColor: 'red'}}
                  sx={{ mt: 3, mb: 2 }}
                  disabled = {progress !== null && progress < 100}
                  >
                    Submit
                    </Button>
          </Grid>
        </Paper>
      </Container>

                </Form>
                </>
              )}
            </div>

          </Grid.Column>
        </Grid.Row>

      </Grid>
      </center>
    </div>

  )
}

export default Edit