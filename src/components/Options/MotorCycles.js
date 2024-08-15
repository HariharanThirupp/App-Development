import { Stack, Container, Box, IconButton, Grid, Paper, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
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

export default function Laptop() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleCardClick = (index) => {
    if (index === 0) {
      navigate('/Laptop1'); // Navigate to the desired route
    } else if (index === 1) {
      navigate('/Laptop2');
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
                        src={index === 1 ? "https://i.pinimg.com/564x/8c/5a/0c/8c5a0c923b30c3aff4cddfa5cf0d3218.jpg" :
                          index === 0 ? "https://i.pinimg.com/736x/20/38/46/20384645b6ad630d946645cedeb961b0.jpg" :
                          "https://i.pinimg.com/564x/0e/77/cd/0e77cda823fd5a750e36fa5d8a70e3b0.jpg"}
                  />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                          {index === 0 ? "Green tech Computer Laptop Mobile service " :
                           index === 1 ? "Ultron Computers - Laptop Service" :
                           "Squid Systems | Laptop Service Center"}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {index === 0 ? "" : ""}
                        </Typography>
                        <Rating name="half-rating-read" defaultValue={index === 0 ? 5 : 4.5} precision={0.5} readOnly />
                      </Grid>
                        <Typography varient="body2" sx={{ cursor: 'pointer' }}>
                          {index === 0 ? "67-71, Dr Krishnasamy Mudaliyar Rd, Brookefields, Sukrawar Pettai, Ram Nagar, Coimbatore, Tamil Nadu 641001" :
                           index === 1 ? "No - 520, 515, Diwan Bahadur Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002, India" :
                           "R.S.Puram"}
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
