import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Showcase.css'; 
import mob from './Images/cellcare.jpg';
import cyc from './Images/bicycle.jpeg';
import kit from './Images/kitchen.jpg';
import moto from './Images/motorcycle.jpg';
import homeap from './Images/homeelctronics.jpeg';
import lap from './Images/Monitors.jpeg';
import { Link } from 'react-router-dom';

export default function MediaCard() {
  return (
    <div className='back'>
      <div className='show'>
        <Card className="hover-card" sx={{ maxWidth: 345, m: 2, flex: 1 }}>
          <Link to='/mob'>
          <CardMedia
            component="img"
            image={mob}
            alt="Mobile phones"
            sx={{ height: 200, objectFit: 'cover' }}
          />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
              Mobile Device Solutions
            </Typography>
          </CardContent>
          <CardActions>
            {/* Add actions here if needed */}
          </CardActions>
        </Card>

        <Card className="hover-card" sx={{ maxWidth: 345, m: 2, flex: 1 }}>
          <CardMedia
            component="img"
            image={cyc}
            alt="Bicycle care"
            sx={{ height: 200, objectFit: 'cover' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
              Bicycle Care
            </Typography>
          </CardContent>
        </Card>

        <Card className="hover-card" sx={{ maxWidth: 345, m: 2, flex: 1 }}>
          <Link to='/lap'>
          <CardMedia
            component="img"
            image={lap}
            alt="Laptops/PC Services"
            sx={{ height: 200, objectFit: 'cover' }}
          />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
              Laptops/PC Services
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className='show'>
        <Card className="hover-card" sx={{ maxWidth: 345, m: 2, flex: 1 }}>
          <CardMedia
            component="img"
            image={moto}
            alt="Certified Motorcycle Workshops"
            sx={{ height: 200, objectFit: 'cover' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
              Certified Motorcycle Workshops
            </Typography>
          </CardContent>
        </Card>

        <Card className="hover-card" sx={{ maxWidth: 345, m: 2, flex: 1 }}>
          <Link to='/kit'>
          <CardMedia
            component="img"
            image={kit}
            alt="Kitchen Appliances"
            sx={{ height: 200, objectFit: 'cover' }}
          />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
              Kitchen Appliances
            </Typography>
          </CardContent>
        </Card>

        <Card className="hover-card" sx={{ maxWidth: 345, m: 2, flex: 1 }}>
          <CardMedia
            component="img"
            image={homeap}
            alt="Home Appliances"
            sx={{ height: 200, objectFit: 'cover' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
              Home Appliances
            </Typography>
          </CardContent>
          <CardActions>
            {/* Add actions here if needed */}
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
