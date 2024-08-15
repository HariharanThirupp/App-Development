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
  const url = 'https://www.google.com/maps/place/The+Lakshmi+Mills+Company+Limited/@11.0140057,76.9835147,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859c27943e0b9:0xff2487c1a98b863d!8m2!3d11.0140057!4d76.9860896!16s%2Fg%2F1tczhxsb?entry=ttu';
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

export default function Watch1() {
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
              src='https://th.bing.com/th/id/OIP.gFyHf1P1RqpoJFeFONVqHAHaCG?w=315&h=99&c=7&r=0&o=5&dpr=1.1&pid=1.7'
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
                1946, Lakshmi Mills, Coimbatore
              </CustomTypography>
              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
              <Typography variant="body1">
                No - 520, 515, Diwan Bahadur Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002, India
              </Typography>
              <hr />
            </div>
            <ServiceList variant="body1">
              <b><u>List of Problems we can take care for you:</u></b><br />
              Professional and Detailed<br />
              At our watch repair service, we specialize in a comprehensive range of watch issues, including:<br />
              Battery Replacement: Ensure your watch is always on time with a fresh battery.<br />
              Mechanical Repairs: Fix issues with winding, movement, and gears for smooth operation.<br />
              Water Damage: Restore your watch to its original condition after exposure to moisture.<br />
              Crystal Replacement: Replace scratched or cracked watch crystals to keep your view clear.<br />
              Strap and Bracelet Repairs: Adjust, repair, or replace worn-out straps and bracelets.<br />
              Calibration and Timing: Fine-tune your watch for accurate timekeeping.<br />
              <div><hr /></div>
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
              <a href="tel:+91 9566321621" style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained" color="primary">
                  <CallIcon />
                  Contact
                </StyledButton>
              </a>
              <StyledButton variant="contained" color="primary" onClick={handleClick}>
      <DirectionsIcon />
      Direction
    </StyledButton>
              <StyledButton variant="contained" color="primary">
                <EventAvailableIcon />
                Book Appointment
              </StyledButton>
            </Stack>
          </RightSection>
        </Grid>
        <Grid item xs={12} md={0.5} />
        <hr />
      </Grid><br/><br/><br/>
      <Grid container style={{ height: '100vh' }} alignItems="center" justifyContent="center">

<Grid item xs={12} md={12}>
  <ReviewSection />
</Grid>

</Grid>    
    
    <Footer />    </div>
    
    </div>
  );
}
