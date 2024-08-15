import { Button, Stack, Container } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './Watches.css';
import HomeIcon from '@mui/icons-material/Home';
import Nav from './Nav';
import Rating from '@mui/material/Rating';

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
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
}));

export default function Appliances() {
  return (
    <div className='back'>
      <Nav />
          <Stack spacing={2} direction="row">
            <Link to="/home">
              <HomeIcon fontSize="large" sx={{ fontSize: 50 }} />
            </Link>
          </Stack>
      <Container>
        <div className="f">
          <div className="head">
            <h1 >Watches</h1>
          </div>
          <hr />
          {Array.from({ length: 3 }).map((_, index) => (
            <React.Fragment key={index}>
              <StyledPaper>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 200, height: 200 }}>
                      <Img
                        alt="complex"
                        src={index === 0 ? "https://cdn.shopify.com/s/files/1/0261/8900/4880/files/Zimson_Brookefields_Mall.jpg?v=1687773875" :
                              index === 1 ? "https://th.bing.com/th/id/OIP.gFyHf1P1RqpoJFeFONVqHAHaCG?w=315&h=99&c=7&r=0&o=5&dpr=1.1&pid=1.7" :
                              "https://www.vintagewatchcompany.com/img/db/slideshow/slidehomepage-shop-front.jpg"}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                          {index === 0 ? "Zimson Brookefields Mall - Coimbatore" :
                           index === 1 ? "1946, Lakshmi Mills, Coimbatore" :
                           "The Vintage Watch Company"}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {index === 0 ? "" : ""}
                        </Typography>
                        <Rating name="half-rating-read" defaultValue={index === 0 ? 5 : 4.5} precision={0.5} readOnly />
                      </Grid>
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
