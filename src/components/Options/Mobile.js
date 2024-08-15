import { Stack, Container, Box, IconButton, Grid, Paper, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import AssistantDirectionRoundedIcon from '@mui/icons-material/AssistantDirectionRounded';
import { Link, useNavigate } from 'react-router-dom'; 
import Nav from './Nav';
import React from 'react';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: 'auto',
  maxWidth: 800,
  flexGrow: 1,
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  display: 'flex',
  gap: theme.spacing(1),
}));

export default function Watches() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleCardClick = (index) => {
    if (index === 0) {
      navigate('/Mobile1'); // Navigate to the desired route
    } else if (index === 1) {
      navigate('/Mobile2');
    } 
    // Add additional cases for other cards if needed
  };

  return (
    <div className='back'>
      <Nav/>
      <Stack spacing={2} direction="row">
        {/* Add any additional items to this Stack if needed */}
      </Stack>
      <Container>
        <div className="f">
          <hr />
          {Array.from({ length: 3 }).map((_, index) => (
            <React.Fragment key={index}>
              <StyledPaper onClick={() => handleCardClick(index)}> {/* Add click handler */}
                
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 200, height: 200 }}>
                      <Img
                        alt="complex"
                        src={index === 0 ? "https://th.bing.com/th/id/OIP._1QaN46qMYiW7pkwlUmcwQAAAA?w=194&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" :
                          index === 1 ? "https://th.bing.com/th?id=OIP.RaJ5XDeQb8h3rLfotdaXGQHaEh&w=320&h=195&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" :
                              "https://th.bing.com/th/id/OIP.vI5HhB-73e-PDO879_hRIQHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                          {index === 0 ? "Poorvika Mobiles" :
                           index === 1 ? "The Chennai Mobiles" :
                           "Mms Solutions"}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {index === 0 ? "" : ""}
                        </Typography>
                        <Rating name="half-rating-read" defaultValue={index === 0 ? 5 : 4.5} precision={0.5} readOnly />
                      </Grid>
                        <Typography varient="body2" sx={{ cursor: 'pointer' }}>
                          {index === 0 ? "No.8, 421-B, Palakkad - Coimbatore Rd, Kuniyamuthur, Tamil Nadu 641008, India" :
                           index === 1 ? "NO. 379, 379/1, Palakkad - Coimbatore Rd, near Wahab Petrol Bunk, Kuniyamuthur, Tamil Nadu 641008, India" :
                           "19/2, Palladam Road, Coimbatore, Tamil Nadu 642001"}
                        </Typography>
                      <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                          {index === 0 ? "10:00 A.M-10:00 P.M" : "9:00 A.M-9:00 P.M"}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </StyledPaper>
              <br />
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
}
