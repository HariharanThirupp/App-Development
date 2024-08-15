// src/BikeServiceCenters.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, Box, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

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

const BikeServiceCenters = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    const storedCenters = JSON.parse(localStorage.getItem('bikeServiceCenters')) || [];
    setCenters(storedCenters);
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Bike Service Centers
      </Typography>
      {centers.length > 0 ? (
        centers.map((center, index) => (
          <StyledPaper key={index}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 200, height: 200 }}>
                  <Img
                    alt="complex"
                    src={center.bikeServiceImages[0] || 'https://via.placeholder.com/200'}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h6" component="div">
                      {center.bikeServiceName}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {center.bikeServiceAddress}
                    </Typography>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                      {center.shopAddress}
                    </Typography>
                    <Typography variant="body2">
                      {center.agreeTerms ? 'Terms agreed' : 'Terms not agreed'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </StyledPaper>
        ))
      ) : (
        <Typography variant="body1" align="center">No bike service centers registered.</Typography>
      )}
    </Container>
  );
};

export default BikeServiceCenters;
