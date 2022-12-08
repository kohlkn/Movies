import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { db } from '../firebase';
import { collection, onSnapshot} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import "firebase/auth";

// const products = [
//   {
//     name: 'The Lego Movie',
//     desc: '0-8yrs',
//     price: '$8.00',
//   },
//   {
//     name: 'The Lego Movie',
//     desc: '9-17yrs',
//     price: '$9.00',
//   },
//   {
//     name: 'The Lego Movie',
//     desc: '18-64yrs',
//     price: '$10.00',
//   },
//   {
//     name: 'The Lego Movie',
//     desc: '+65yrs',
//     price: '$6.00',
//   },
//   //{ name: 'Shipping', desc: '', price: 'Free' },
// ];

// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiration', detail: '04/2024' },
// ];

//edit this value later to pull from database and be altered by promo codes 
let total = 10.00

export default function Review() {
  //gets booking from current user
  let user = firebase.auth().currentUser;
  const userid = user.uid;
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const [infoloading,setInfoLoading] = useState(false);
  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db,"order"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        if(doc.id == "new"){
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
  //gets current user billing and card information
  useEffect(() => {
    setInfoLoading(true);
    const unsub = onSnapshot(collection(db,"users"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        if(doc.id == userid){
        list.push({id: doc.id, ...doc.data()})
        }
      });
      setUsersInfo(list);
      //setSearchResults(list);
      setInfoLoading(false)
  
    }, (error)=> {
      console.log(error);
    });
    return () => {
      unsub();
    };
  }, []);
  
  return (
    <React.Fragment>
      {users && users.map((item) => (
      <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
      
          <ListItem key={item.movieId} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.movieId} secondary={item.seats} />
            <Typography variant="body3">Price: ${item.ticketcost}</Typography>
            <Typography variant="body2">x{item.ticketnum}</Typography>
            {/* <Button style= {{ color: 'red'}}><AddIcon /></Button>
            <Button style= {{ color: 'red'}}><DeleteIcon /></Button> */}
          </ListItem>
        
        <TextField
            id="cardName"
            label="Promo Code"
            width="50%"
            color='error'
          />
        <ListItem sx={{ py: 1, px: 0 }}>
          
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${item.ticketnum * item.ticketcost}
          </Typography>
        </ListItem>
      </List>
      </>
      ))}
      <Grid container spacing={2}>
        {usersInfo && usersInfo.map((item) => (
        <><Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Billing
            </Typography>
            <Typography gutterBottom>{item.cardname}</Typography>
            <Typography gutterBottom>{item.addone}</Typography>
            <Typography gutterBottom>{item.addtwo}</Typography>
            <Typography gutterBottom>{item.city}</Typography>
            <Typography gutterBottom>{item.state}</Typography>
          </Grid><Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Payment details
              </Typography>
              <Grid container>
                  <React.Fragment key={item.cardname}>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{item.cardname}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{item.cardnum}</Typography>
                      <Typography gutterBottom>{item.exp}</Typography>
                      <Typography gutterBottom>{item.cvv}</Typography>
                      
                    </Grid>
                  </React.Fragment>
              </Grid>
            </Grid>
            </>
        ))}
      </Grid>
    </React.Fragment>
  );
}