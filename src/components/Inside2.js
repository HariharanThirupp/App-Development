import * as React from 'react';
import Box from '@mui/material/Box';
import img2 from './Images/bicycle.jpeg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Footer from './Footer';
import { useState } from 'react';

import Rating from '@mui/material/Rating';
export default function SimplePaper() {
    const [modalOpen, setModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOpenModal = (number) => {
    setPhoneNumber(number);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };  
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6}>
          <Box 
            sx={{ 
              padding: 2, 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%', 
              boxSizing: 'border-box'
            }}
          >
            <img 
              src={img2} 
              alt="Cellcare"
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '100%',
                objectFit: 'contain'
              }} 
            />
          </Box>
        </Grid>
        
        <Grid item xs={6}>
          <Box 
            sx={{ 
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              boxSizing: 'border-box'
            }}
          >
            <Typography variant="h4" component="div" gutterBottom>
              Bicycle Service Center
            </Typography>
            <Typography variant="body1" component="div" paragraph>
              Welcome to our Bicycle Service Center, where we offer top-notch maintenance and repair services for all types of bicycles. Our experienced technicians are dedicated to ensuring your bike runs smoothly and safely. We offer a range of services including:
            </Typography>
              <ul>
                <li>General Maintenance</li>
                <li>Brake Adjustments</li>
                <li>Gear Tuning</li>
                <li>Flat Tire Repairs</li>
                <li>Full Overhauls</li>
              </ul>
              Contact us today to schedule an appointment and keep your bicycle in optimal condition.
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /><br></br>

            <Button variant="contained" color="primary" onClick={() => handleOpenModal('91+ 7708587027')}> Call
                </Button><br/>
            <Button variant="contained" color="primary">
              Book an Appointment
            </Button>
          </Box>
        </Grid>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div> 
  );
}
