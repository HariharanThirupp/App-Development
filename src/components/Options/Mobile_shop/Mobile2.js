import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import Button from '@mui/material/Button';
import Nav from '../Nav';
import Footer from './Footer'; // Correct import for Footer component
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CallIcon from '@mui/icons-material/Call';
import DirectionsIcon from '@mui/icons-material/Directions';
import Stack from '@mui/material/Stack';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ReviewSection from './Review';

const LeftSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%', // Ensure the section takes full height
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ddd', // Add a small border
}));
const handleClick = () => {
  // URL you want to navigate to
  const url = 'https://www.google.com/maps/place/The+Chennai+Mobiles/@10.9743098,76.9164787,13.11z/data=!4m10!1m2!2m1!1schennai+mobiles!3m6!1s0x3ba85b018c08cdc1:0xb793bf95e184dfd5!8m2!3d10.9663891!4d76.9556923!15sCg9jaGVubmFpIG1vYmlsZXMiA4gBAVoRIg9jaGVubmFpIG1vYmlsZXOSARBjZWxsX3Bob25lX3N0b3Jl4AEA!16s%2Fg%2F11hdx7xssp?entry=ttu';
  window.open(url, '_blank'); // Open URL in a new tab
};
const RightSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%', // Ensure the section takes full height
  display: 'flex',
  flexDirection: 'column', // Arrange content vertically
  border: '1px solid #ddd', // Add a small border
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontSize: '2rem', // Adjust the font size as needed
  fontWeight: 'bold', // Optional: makes the text bold
}));

const Img = styled('img')({
  maxWidth: '100%',
  height: 'auto', // Maintains aspect ratio
  borderRadius: '8px', // Optional: adds rounded corners
});

const ServiceList = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem', // Adjust the font size for the service list
  marginTop: theme.spacing(2),
  textAlign: 'left', // Align text to the left
}));
const handleAppoin=()=>{
  const url='https://forms.gle/AR42PQxuAEakfk9N9';
  window.open(url,'_blank');
}
const IconContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));

const VerifiedText = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem', // Adjust the font size for the text
  marginLeft: theme.spacing(1),
  textAlign: 'center', // Center the text below the icons
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '4px',
  padding: theme.spacing(1, 2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1), // Add some space between the icon and text
  transition: 'background-color 0.3s, transform 0.2s',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.02)',
  },
}));

export default function Mobile2() {
  return (
    <div className='back'>
      <Nav />
      <div>
      <Grid container style={{ height: '100vh' }} alignItems="center" justifyContent="center">
        {/* Left Section */}
        <Grid item xs={12} md={0.5} />

        <Grid item xs={12} md={4}>
          <LeftSection>
            <Img
              src='https://th.bing.com/th?id=OIP.RaJ5XDeQb8h3rLfotdaXGQHaEh&w=320&h=195&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'
              alt='Zimson Brookefields Mall'
            />
          </LeftSection>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={0.5} />

        <Grid item xs={12} md={6}>
          <br />
          <RightSection>
            <div className='head'>
              <CustomTypography variant="h5">
                The Urban Company<br />
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /><br></br>
              </CustomTypography>
              NO. 379, 379/1, Palakkad - Coimbatore Rd, near Wahab Petrol Bunk, Kuniyamuthur, Tamil Nadu 641008, India              <hr />
            </div>
            <ServiceList variant="body1">
            At Poorvika Mobiles, we offer a comprehensive range of mobile repair services to keep your device running smoothly. Our skilled technicians are equipped to handle a variety of issues with precision and care. Here’s what we provide:
              <br/><b><u>Our Services:</u></b>
              

<br/><b>1. Screen Repair/Replacement</b>

<br/><b>Battery Replacement</b>

<br/><b>Charging Port Repair</b>

<br/><b>Camera Repair/Replacement</b>

<br/><b>Button Repair</b>

<br/><b>Speaker and Microphone Repair</b>

<br/><b>Water Damage Repair</b>

<br/><b>Software Troubleshooting</b>

<br/><b>Data Recovery</b>

<br/><b>Diagnostic Services</b>

<br/><b>Performance Optimization</b>

<br/><b>Hardware Upgrades</b><br/><br/>
Trust Poorvika for reliable, professional, and efficient mobile repair services. Contact us today to schedule an appointment or to learn more about how we can assist you.
              <div className='lines'><hr /></div>
            </ServiceList>
            <IconContainer container spacing={2} justifyContent="space-between">
              <Grid item xs={3} display="flex" flexDirection="column" alignItems="center">
                <VerifiedUserOutlinedIcon fontSize="large" />
                <VerifiedText variant="body1">Verified Agent</VerifiedText>
              </Grid>
              <Grid item xs={3} display="flex" flexDirection="column" alignItems="center">
                <LockOutlinedIcon fontSize="large" />
                <VerifiedText variant="body1">Safety</VerifiedText>
              </Grid>
              <Grid item xs={3} display="flex" flexDirection="column" alignItems="center">
                <PublishedWithChangesOutlinedIcon fontSize="large" />
                <VerifiedText variant="body1">Faster Service</VerifiedText>
              </Grid>
              <Grid item xs={3} display="flex" flexDirection="column" alignItems="center">
                <EmojiEventsIcon fontSize='large'/>
                <VerifiedText variant="body1">Top Service Provider</VerifiedText>
              </Grid>
            </IconContainer>
            <hr />
            <br />
            <br />
            <Stack direction="row" spacing={2} sx={{ mb: 2, justifyContent: 'center' }}>
              <a href="tel:+91 7708587027" style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained" color="primary">
                  <CallIcon />
                  Contact
                </StyledButton>
              </a>
              <StyledButton variant="contained" color="primary" onClick={handleClick}>
      <DirectionsIcon />
      Direction
    </StyledButton>
              <StyledButton variant="contained" color="primary" onClick={handleAppoin}>
                <EventAvailableIcon />
                Book Appointment
              </StyledButton>
            </Stack>
          </RightSection>
        </Grid>
        <Grid item xs={12} md={0.5} />
        <hr />
      </Grid><br/><br/><br/><br/><br/>
      <Grid container style={{ height: '100vh' }} alignItems="center" justifyContent="center">

  <Grid item xs={12} md={12}>
    <ReviewSection />
  </Grid>

</Grid>    
      
      <Footer /> 
    </div>
    
    </div>
  );
}
