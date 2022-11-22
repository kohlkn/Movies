import React, { useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import YoutubeEmbed from "./YoutubeEmbed";
import {useNavigate} from 'react-router-dom'

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

export default function MainModal(e) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalData, setModalData] = useState('');
  const navigate = useNavigate();
  const navigateToBooking = () => {
    navigate('/BookTickets');
  }

  return (
    <div>
      <Button onClick={() => {setOpen(true); setModalData(e);}} style= {{ color: 'red'}}>View</Button>
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
  );
}