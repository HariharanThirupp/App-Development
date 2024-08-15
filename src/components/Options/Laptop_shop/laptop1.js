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
import ReviewSection from './ReviewSection';

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
  const url = 'https://www.google.com/maps/place/Poorvika+Mobiles+Coimbatore+-+Sundarapuram/@10.9669086,76.9467203,14.39z/data=!4m10!1m2!2m1!1spoorvika!3m6!1s0x3ba85b7f37ff8135:0x4a9254197af207e!8m2!3d10.9574384!4d76.9719918!15sCghwb29ydmlrYSIDiAEBWgoiCHBvb3J2aWthkgEQY2VsbF9waG9uZV9zdG9yZeABAA!16s%2Fg%2F11j01ppy0z?entry=ttu';
  window.open(url, '_blank'); // Open URL in a new tab
};
const handleAppoin=()=>{
  const url='https://forms.gle/qfvB5HcMAgzD7PkP6';
  window.open(url,'_blank');
}
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

export default function Laptop1() {
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
              src='https://i.pinimg.com/736x/6e/41/3d/6e413d01fe72b36588354fe493b3e40f.jpg'
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
              Green tech Computer Laptop Mobile service<br />
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /><br></br>
              </CustomTypography>
              No 287, Pollachi Main Rd, Sundarapuram, Coimbatore, Kurichi, Tamil Nadu 641024, India              <hr />
            </div>
            <ServiceList variant="body1">
At Green tech, we offer a comprehensive range of expert services to ensure your laptop or PC operates at peak performance. Our skilled technicians are committed to providing top-notch repairs and maintenance tailored to meet your needs.
            <br/><b><u>Our Professional Repair Services</u></b><br/>

<b>Screen Replacement</b>
<br/><b>Battery Replacement</b>
<br/><b>Hard Drive/Data Recovery</b>
<br/><b>RAM Upgrade</b>
<br/><b>Operating System Installation & Reinstallation</b>
<br/><b>Virus Removal & Malware Protection</b>
<br/><b>Hardware Diagnostics & Repair</b>
<br/><b>Software Installation & Configuration</b>
<br/><b>Network Setup & Troubleshooting</b>
<br/><b> Cooling System Cleaning & Repair</b>
<br/><b> Custom PC Builds</b>
<br/><b> Data Backup Solutions</b>
<br/><b> Peripheral Setup & Repair</b>
<br/><b> System Optimization</b>
<br/><b> Upgrade & Replacement of Components</b>
<br/><hr/>Contact us today to schedule a service or to learn more about how we can assist with your laptop or PC needs. Our professional team is dedicated to providing exceptional repair and support services.


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
      </Grid> <br/><br /><br /><br /><br /><br /><br /><br/>
  <Grid container style={{ height: '100vh' }} alignItems="center" justifyContent="center">

  <Grid item xs={12} md={12}>
    <ReviewSection />
  </Grid>

</Grid>    
      <Footer /> {/* Render Footer component */}
      </div>
    </div>
  );
}
