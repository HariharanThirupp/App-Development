// src/TableComponent.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import HomePage from './Navbar';
import Footer from '../Footer';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ComputerIcon from '@mui/icons-material/Computer';
import ChairIcon from '@mui/icons-material/Chair';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import KitchenIcon from '@mui/icons-material/Kitchen';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

// Define icons corresponding to each label
const icons = {
  'Motorcycle': <DirectionsBikeIcon fontSize="large" />,
  'Laptop/PC': <ComputerIcon fontSize="large" />,
  'Mobile': <PhoneAndroidIcon fontSize="large" />,
  'Furniture': <ChairIcon fontSize="large" />,
  'Home App': <KitchenIcon fontSize="large" />,
  'Bicycle': <TwoWheelerIcon fontSize="large" />,
  'Kitchen App': <KitchenIcon fontSize="large" />,
};

const StyledBox = styled(Box)(({ theme }) => ({
  height: 150,
  width: 150,
  display: 'flex',
  flexDirection: 'column', // Align items in a column
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f5f5',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    backgroundColor: '#e0e0e0',
    transform: 'scale(1.05)',
  },
}));

const labels = [
  'Motorcycle',
  'Laptop/PC',
  'Mobile',
  'Furniture',
  'Home App',
  'Bicycle',
  'Kitchen App',
  'Other'
];

const TableComponent = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = (label) => {
    if (label === 'Motorcycle') {
      navigate('/User'); // Navigate to /User route
    } else {
      // Handle other labels if needed
      console.log(`${label} clicked!`);
    }
  };

  return (
    <div>
      <HomePage />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          padding: 2
        }}
      >
        {labels.map((label, index) => (
          <StyledBox key={index} onClick={() => handleClick(label)}>
            {icons[label]} {/* Add the corresponding icon */}
            <Typography variant="h6" mt={1}>
              {label}
            </Typography>
          </StyledBox>
        ))}
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default TableComponent;
