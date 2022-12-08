import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import firebase from 'firebase/compat/app';
import { db } from '../firebase';
import "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { useState, useEffect } from 'react'
import { collection, deleteDoc, onSnapshot, doc } from 'firebase/firestore';

const products = [
  {
    name: 'The Lego Movie',
    desc: '0-8yrs',
    price: '$8.00',
  },
  {
    name: 'The Lego Movie',
    desc: '9-17yrs',
    price: '$9.00',
  },
  {
    name: 'The Lego Movie',
    desc: '18-64yrs',
    price: '$10.00',
  },
  {
    name: 'The Lego Movie',
    desc: '+65yrs',
    price: '$6.00',
  },
  //{ name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {

  const [order, setOrder] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //the collection db, "movies" calls upon a database named movies in the firebase setup
    const unsub = onSnapshot(collection(db,"order"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({id: doc.id, ...doc.data()})
      });
      setOrder(list);
      //setSearchResults(list);
      setLoading(false)
  
    }, (error)=> {
      console.log(error);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {order && order.map((item) => (
          <ListItem key={item.movieId} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.movieId} secondary={'Seats: ' + item.seats} />
            <Typography variant="body2">${item.ticketcost * item.ticketnum}</Typography>
            <Button style= {{ color: 'red'}}><AddIcon /></Button>
            <Button style= {{ color: 'red'}}><DeleteIcon /></Button>
          </ListItem>
        ))}
        <TextField
            id="cardName"
            label="Promo Code"
            width="50%"
            color='error'
          />
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Shipping" />
          <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
            Free
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $33.00
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}