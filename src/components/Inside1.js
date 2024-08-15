import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import img1 from './Images/cellcare.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Footer from './Footer';
import Rating from '@mui/material/Rating';
import { useState } from 'react';


export default function Inside1() {
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
      <br></br><br></br>
      <Typography variant="h4" align="center" gutterBottom>
        Mobile Service Center
      </Typography>
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
              src={img1} 
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
              height: '100%', 
            }}
          >
            <Typography variant="h6" gutterBottom>
              
            </Typography>
            <Typography variant="body1" gutterBottom>
              Welcome to the Mobile Service Center! We offer a wide range of services to keep your mobile devices in perfect condition. From screen repairs to battery replacements, our experienced technicians use only the highest quality parts and tools.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our services include:
            </Typography>
            <ul>
              <li>Screen Replacement</li>
              <li>Battery Replacement</li>
              <li>Water Damage Repair</li>
              <li>Software Troubleshooting</li>
              <li>Data Recovery</li>
              <li>And much more...</li>
            </ul>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /><br></br>

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
