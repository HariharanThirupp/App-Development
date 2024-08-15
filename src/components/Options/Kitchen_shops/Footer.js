import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    
    <footer style={{ backgroundColor: '#f5f5f5', padding: '16px', textAlign: 'center' }}>
      <Container>
        
        <Typography variant="body2">
          © 2024 Your Company Name
        </Typography>
        <Typography variant="body2">
          <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Use</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
