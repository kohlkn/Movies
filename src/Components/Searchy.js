import React, {useEffect, useState} from 'react';
import {db} from '../firebase';
import { collection, onSnapshot} from 'firebase/firestore';
import "./Searchy.css";
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import YoutubeEmbed from "../Components/YoutubeEmbed";
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import { ListItemAvatar } from '@mui/material';
import { list } from 'firebase/storage';

export default function Search() {
  const [value, setValue] = useState("");

  const [open, setOpen] = useState(false);
  //const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalData, setModalData] = useState('');
  const navigate = useNavigate();
  const navigateToBooking = () => {
    navigate('/BookTickets');
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    //console.log("search ", searchTerm);
  };

  const [movies, setMovies] = useState([]);
  const [newmovies, setNewMovies] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db,"movies"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({id: doc.id, ...doc.data()})
      });
      setMovies(list);
      setLoading(false)

    }, (error)=> {
      console.log(error);
    });
    return () => {
      unsub();
    };
  }, []);



  return (
    <div className="App">
      {movies && movies.map((item) => (
      <div className="search-container">
      
      
        <div className="search-inner">
        
          <input type="text" value={value} onChange={onChange}/>

          {/*<Button onClick={() => onSearch(value)} style= {{ backgroundColor: 'red', color: 'white'}}>Search</Button>*/}
          <Button onClick={() => {setOpen(true); setModalData(item)}} style= {{ backgroundColor: 'red', color: 'white' }}>Search</Button>
                  <Modal
                      open={open}
                      onClose={handleClose}
                    >
                    <Box sx={style}>
                      <Typography variant="h6" component="h2">
                        {modalData.name}
                      </Typography>
                      <Typography class='rating'>
                        {modalData.genre} | {modalData.rating}
                      </Typography>
                      <div sx='h1' style= {{ color: 'red'}}>
                        Showtimes
                      </div>
                      <Typography class="showtime">
                        11:00am 6:00pm 10:30pm
                      </Typography>
                      <Button onClick={navigateToBooking} variant="contained" style= {{ backgroundColor: 'red'}}>Book Tickets</Button>
                      <div><br></br></div>
                      <YoutubeEmbed embedId={modalData.youtubelink} />
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalData.info}
                      </Typography>
                    </Box>
                    </Modal>
                    
          
              
        </div>
      

        <div className="dropdown">
          {movies
          .filter((item) => {
              const searchTerm = value.toLowerCase();
              const mname = item.name.toLowerCase();

              return (
                searchTerm &&
                mname.startsWith(searchTerm) &&
                mname !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.name)}
                className="dropdown-row"
                key={item.name}
              >
                {item.name}
                
              </div>
              
              
            ))}
            
        </div>
      </div>
      ))}
    </div>
  );
}