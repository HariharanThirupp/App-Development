import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import './Categories.css'; // Ensure this path is correct for your project structure

export default function VariantButtonGroup() {
  return (
    <div className="body2">
      <Box className="button-group-container">
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button><Link to='/wat'>Watches</Link></Button>
          <Button><Link to='/kit'>Kitchen accessories</Link></Button>
          <Button><Link to='/mot'>Motorcycles</Link></Button>
          <Button><Link to='/mob'>Mobile</Link></Button>
          <Button><Link to='/cyc'>Bicycles</Link></Button>
          <Button><Link to='/tel'>Television</Link></Button>
          <Button><Link to='/app'>Appliances</Link></Button>
          <Button><Link to='/fur'>Furniture</Link></Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}
