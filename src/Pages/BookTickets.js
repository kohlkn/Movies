import './BookTickets.css';
import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import {useNavigate, useParams} from 'react-router-dom';
import {db} from '../firebase';
import firebase from 'firebase/compat/app';
import { collection, onSnapshot, doc, getDoc, setDoc } from 'firebase/firestore';
import { getListItemTextUtilityClass } from '@mui/material';


const movies = [
  {
    name: '0-8yrs',
    price: 8,
    occupied: [2, 13, 35, 34, 40, 55, 56],
  },
  {
    name: '9-17yrs',
    price: 9,
    occupied: [2, 13, 35, 34, 40, 55, 56],
  },
  {
    name: '18-64yrs',
    price: 10,
    occupied: [2, 13, 35, 34, 40, 55, 56],
  },
  {
    name: '+65yrs',
    price: 6,
    occupied: [2, 13, 35, 34, 40, 55, 56],
  },
]

const times = [
    {
        time: '10:30pm'
    },
    {
        time: '6:00pm'
    },
    {
        time: '11:00am'
    },
]

const agerange = [
    {
        age: '0-8yrs',
        price: 8,
    },
    {
        age: '9-17yrs',
        price: 9,
    },
    {
        age: '18-64yrs',
        price: 10,
    },
    {
        age: '+65yrs',
        price: 6,
    }
]

const seats = Array.from({ length: 8 * 8 }, (_, i) => i)

const initialState = {
  title: ""
}



export default function Book() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [movieInfo, setMovieInfo] = useState([])
  
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate('/Checkout');
  }

  const {id} = useParams();
  // const [data, setData] = useState(initialState);
  // useEffect(() => {
  //   id && getSingleMovie();
  // }, [id])
  // const getSingleMovie = async () => {
  //   //movies is the collection name within firebase 
  //   const docRef = doc(db, "movies", id);
  //   const snapshot = await getDoc(docRef);
  //   if(snapshot.exists()) {
  //     setData({...snapshot.data()});
  //   }
  // };
  


  useEffect(() => {
    setLoading(true);
    //the collection db, "movies" calls upon a database named movies in the firebase setup
    const unsub = onSnapshot(collection(db,"movies"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        if(doc.id == id){
        list.push({id: doc.id, ...doc.data()})
        }
      });
      setMovieInfo(list);
      //setSearchResults(list);
      setLoading(false)

    }, (error)=> {
      console.log(error);
    });
    return () => {
      unsub();
    };
  }, []);

  const handleSubmit = async (seats, num, price, id) => {
    console.log(num)
    console.log(price)
    console.log(id)
    console.log(seats)

  try{
        await setDoc(doc(db, "order",'new'),{
          ticketnum: num,
          ticketcost: price,
          movieId: id,
          seats: seats + ' '
        });
      } catch (error) {
        console.log(error);
      }
      navigateToCheckout()
    }
  return (
    <div className="Book">
      {movieInfo && movieInfo.map((item)=> (
        <>
        <h1>Book Tickets for <strong>{item.name}</strong></h1>
        
      
      <Movies
        movie={selectedMovie}
        onChange={movie => {
          setSelectedSeats([])
          setSelectedMovie(movie)
        }}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{' '}
        seats for the price of{' '}
        <span className="total">
          {selectedSeats.length * selectedMovie.price}$
        </span>
      </p>
      <Button onClick={() => {handleSubmit(selectedSeats, selectedSeats.length, selectedMovie.price, item.name);}} variant="contained" style= {{ backgroundColor: 'red'}}>Book Tickets</Button>
      </>
      ))}
      <br></br>
      <br></br>
    </div>
  )
}

function Movies({ movie, onChange }) {

  const [movieInfo, setMovieInfo] = useState([])
  const [loading,setLoading] = useState(false);
  const [movieTime, setMovieTime] = useState([])

  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    //the collection db, "movies" calls upon a database named movies in the firebase setup
    const unsub = onSnapshot(collection(db,"movies"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        if(doc.id == id){
        list.push({id: doc.id, ...doc.data()})
        }
      });
      setMovieInfo(list);
      //setSearchResults(list);
      setLoading(false)

    }, (error)=> {
      console.log(error);
    });
    return () => {
      unsub();
    };
  }, []);
  //console.log(id)

  useEffect(() => {
    setLoading(true);
    //the collection db, "movies" calls upon a database named movies in the firebase setup
    const unsub = onSnapshot(collection(db,`movies/${id}/showtimes`), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({id: doc.id, ...doc.data()})
      });
      setMovieTime(list);
      //setSearchResults(list);
      setLoading(false)

    }, (error)=> {
      console.log(error);
    });
    return () => {
      unsub();
    };
  }, []);
  //console.log(item)

  function getSelection(value) {
    console.log(value)
  }
  var item = movieTime


  return (
    <div>

    <div className="Time">
    <label htmlFor="time">Time</label>
    <select
        id="time"
        value={item.showtime}
        onChange={e => {
          onChange(movieTime.find(item => item.showtime === e.target.value))
        }}
    >
    {movieTime.map(item => (
    <option key={item.showtime} value={item.showtime}>
      {item.showtime}
    </option>
    ))}
    
    
    </select>
    </div>

    <div className="Movies">
      <label htmlFor="movie">Age</label>
      <select
        id="movie"
        value={movie.name}
        onChange={e => {
          onChange(movies.find(movie => movie.name === e.target.value))
        }}
      >
        {movies.map(movie => (
          <option key={movie.name} value={movie.name}>
            {movie.name} (${movie.price})
          </option>
          
        ))}
      </select>
    </div>

    {/*<div className="Age">
    <label htmlFor="age">Age</label>
    <select
        id="age"
        value={agerange.age}
        onChange={e => {
        onChange(agerange.find(agerange => agerange.age === e.target.value))
        }}
    >
    {agerange.map(agerange => (
    <option key={agerange.age} value={agerange.age}>
      {agerange.age} (${agerange.price})
    </option>
    
    ))}
    </select>
    </div>*/}
        </div>
  )
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  )
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }

  const {id} = useParams();

  const [loading,setLoading] = useState(false);
  const [movieTime, setMovieTime] = useState([])
  useEffect(() => {
    setLoading(true);
    //the collection db, "movies" calls upon a database named movies in the firebase setup
    const unsub = onSnapshot(collection(db,`movies/${id}/showtimes`), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({id: doc.id, ...doc.data()})
      });
      setMovieTime(list);
      //setSearchResults(list);
      setLoading(false)
      //console.log(movieTime)

    }, (error)=> {
      console.log(error);
    });
    return () => {
      unsub();
    };
  }, []);
  //console.log(movieTime)

  return (
    <div className="Cinema">
      <div className="screen" />
      <div className="seats">
        {seats.map(seat => {
          //console.log(movieTime[0].occupied)
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
          )
        })}
      </div>
    </div>
  )
}