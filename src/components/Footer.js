import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import './Footer.css';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <div className='footer'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} >
          <Grid item xs>
        <div className='footer'>
            <Item>
              For more Information
              <div className='lines'>
              <hr></hr></div>
              <Link to='/add'>
                  Add your shop<br/>
                 </Link>
                  <a href='ksl'>About us</a><br/>
  
                <a href='ksl'>FAQ</a><br/>
                  <a href='ksl'>Terms and Conditions</a><br/>
                  <a href='ksl'>Privacy Policy</a>   
                <br></br>
              
            </Item>
            </div>
          </Grid>
          
          <Grid item xs={4}>
          <Item>
              Our Partners
              <div className='lines'><hr></hr></div>
              
            
              <a href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj_rcmGp9yCAxUrGIMDHUEjA-cYABAAGgJzZg&ase=2&gclid=CjwKCAiAsIGrBhAAEiwAEzMlC-SRSGA2v3LwDYKgAvibjplOaVgdpwU8TWNpA9Oj16_9N6ooVnl61hoCdEcQAvD_BwE&ohost=www.google.com&cid=CAESVuD2b8KkQNkFfJ_h5IxyuYFKv-VDRfUF-iXLZbyJzyKG007TNVKOHt7FVeHCfC1lWagcuz9-9lbB6UatavCQO-c4-mQpjVXdFTtH29XdkOhb6Ltc6VHr&sig=AOD64_1z05Igo8a5gsg0kHvezCmtI12Ttg&q&nis=4&adurl&ved=2ahUKEwjj1sKGp9yCAxXWa2wGHfbsDI8Q0Qx6BAgJEAE'>Amazon</a><br/>
              <a href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiwksDLp9yCAxXo1hYFHevQDqEYABAEGgJ0bA&ase=2&gclid=CjwKCAiAsIGrBhAAEiwAEzMlCzXdluQRyY6OdAtAecBb0MPy5-ce1bj5kAaP_OWrfPTerrQNM0AAMRoCbEkQAvD_BwE&ohost=www.google.com&cid=CAESVuD2xB4JZAYf1ZMelKHyeUDJNzARBBcZ65Tuedkqrw02DJuTAqsQTgAS1JtuldNLh4GBeOzPwRI6vkwDvUpzOREpzK1fPeTXiMtab9HZdX35XVq8fBCt&sig=AOD64_3vQ_WEVSBcxq1pQyVZXU4Eh1DUrw&q&nis=4&adurl&ved=2ahUKEwiA7rbLp9yCAxUCc_UHHbDUDUQQ0Qx6BAgIEAE'>Flipkart</a><br/>
              <a href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjS0ZO-qdyCAxXApWYCHZPADu8YABAAGgJzbQ&ase=2&gclid=CjwKCAiAsIGrBhAAEiwAEzMlC1KmjLQ0e6Y32yphlK_14bKCDFW1H3WU3m3JmmZiqsjhBkBPRaepqxoC8BwQAvD_BwE&ohost=www.google.com&cid=CAESVuD2bfm4lXETwe6WG_FpdmJ7_VBqDITEdYhMKS_PmBxlmQvf7OD8DuZT5N4B4fG9R6bdeKY_kiJU84KUalBNOm0O7N1Dkm_MGJHfTNXF_NWlEVGPpmzg&sig=AOD64_2aSXcKQd5IXs4EntRpuzbTH7il6Q&q&nis=4&adurl&ved=2ahUKEwjwuoi-qdyCAxV2VmwGHXrJCH8Q0Qx6BAgPEAE'>OLX</a><br/>
              <a href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiwksDLp9yCAxXo1hYFHevQDqEYABADGgJ0bA&ase=2&gclid=CjwKCAiAsIGrBhAAEiwAEzMlC2k1WxTT-Y97VrgbxA-WfA65hsAfNYK6_G5knKa2ppecmZTCnFnf-xoCZfsQAvD_BwE&ohost=www.google.com&cid=CAESVuD2xB4JZAYf1ZMelKHyeUDJNzARBBcZ65Tuedkqrw02DJuTAqsQTgAS1JtuldNLh4GBeOzPwRI6vkwDvUpzOREpzK1fPeTXiMtab9HZdX35XVq8fBCt&sig=AOD64_32n_E1slLYcLIiI68P2YtfGMD6lQ&q&nis=4&adurl&ved=2ahUKEwiA7rbLp9yCAxUCc_UHHbDUDUQQ0Qx6BAgLEAM'>ebay</a><br/>
              <br></br>
            </Item>
          </Grid>
          <Grid item xs>
          <Item>
              Follow us on
              <div className='lines'><hr></hr></div>
              <p><a href='https://www.facebook.com/'><Facebook /></a>
              <a href='https://www.instagram.com/'><Instagram/></a>
              <a href='https://twitter.com/login?lang=en'><Twitter/></a></p>
              <br></br><br></br>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <br></br></div>
  );
}