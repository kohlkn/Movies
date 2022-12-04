import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom'
//import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';
//import ListItemText from '@mui/material/ListItemText';
//import Grid from '@mui/material/Grid';

/*
const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];*/
import firebase from 'firebase/compat/app';
import "firebase/auth";

export default function RegistrationConfirm() {

  let user = firebase.auth().currentUser;
  //console.log(user.uid)
  //console.log(user.email)

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/MainPage');
  }


  return (
    <>
      <br></br>
      <h2>
        Your Account has been created. Thank you for creating an account with us!
      </h2>
      <center>
        <Button onClick={navigateHome} variant="contained" style= {{ backgroundColor: 'red'}}>Done</Button>
      </center>
    </>
    

  );
}