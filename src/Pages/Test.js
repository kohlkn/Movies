import React, {useEffect,useState} from 'react';
import {db} from '../firebase';
import firebase from 'firebase/compat/app';
import { collection, onSnapshot, doc } from 'firebase/firestore';


const Test = () => {
    const [movies, setMovies] = useState([]);
    //const [newmovies, setNewMovies] = useState([]);
    const [loading,setLoading] = useState(false);
  //const [searchResults, setSearchResults] = useState([]);

  let user = firebase.auth().currentUser;
  //console.log(user.uid)
  //console.log(user.email)
  

  useEffect(() => {
    setLoading(true);
    //the collection db, "movies" calls upon a database named movies in the firebase setup
    const unsub = onSnapshot(collection(db,"movies"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        // list.push({id: doc.id, ...doc.data()})
        list.push({id: doc.id, ...doc.data()})
      });
      setMovies(list);
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
    <div className="container">
       <h1>Movie Titles:</h1>
       {movies && movies.map((item) => (
        <p>{item.name}</p>
        ))}
        <h1>movie times</h1>
        {movies && movies.map((item) => (
        <p>{item.showtimes}</p>
        ))}

    </div>
  );
};

export default Test