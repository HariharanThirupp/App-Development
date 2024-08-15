import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import CallModal from './CallModal'; 
import './Showcase.css'; 
import mob from './Images/cellcare.jpg';
import cyc from './Images/bicycle.jpeg';
import kit from './Images/kitchen.jpg';
import moto from './Images/motorcycle.jpg';
import homeap from './Images/homeelctronics.jpeg';
import lap from './Images/Monitors.jpeg';

export default function MediaCard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOpenModal = (number) => {
    setPhoneNumber(number);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='back'>
      <br />
      <br />
      <div className='show'>
        <Card className="hover-card" sx={{ maxWidth: 345 }}>
          <CardMedia
            title="green iguana"
          />
          <img src={mob} style={{ height: '300px' }} alt="Mobile phones" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mobile phones
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Expert mobile repair center offering fast, reliable service for all phone models. Conveniently located with affordable rates and quality repairs.<br />
              <b> 3rd Street, Gandhipuram</b><br />
              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleOpenModal('91+ 7708587027')}>Call</Button>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>

        <Card className="hover-card" sx={{ maxWidth: 345 }}>
          <CardMedia
            title="green iguana"
          />
          <img src={cyc} style={{ height: '300px' }} alt="Bicycle care" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bicycle care
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pro Bicycle Service: Expert repairs in Ukkadam, near Bus Stand. Reliable and professional care for all your bicycle needs.<br />
              <b>Ukkadam, Near Bus Stand</b><br />
              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleOpenModal('123-456-7891')}>Call</Button>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>

        <Card className="hover-card" sx={{ maxWidth: 345 }}>
          <CardMedia
            title="green iguana"
          />
          <img src={lap} style={{ height: '300px' }} alt="Laptops/PC Services" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Laptops/PC Services
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Reliable laptop/PC repair center offering fast, professional service for all brands. Expert technicians ensure quality repairs at affordable rates.<br />
              <b>Kuniyamuthur, Coimbatore</b><br />
              <Rating name="half-rating-read" defaultValue={5} readOnly />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleOpenModal('123-456-7892')}>Call</Button>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
      </div>
      <div className='centered-cards'>
        <Card className="hover-card" sx={{ maxWidth: 345 }}>
          <CardMedia
            title="green iguana"
          />
          <img src={moto} style={{ height: '300px' }} alt="Certified Motorcycle workshops" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Certified Motorcycle workshops
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Expert motorcycle repair center providing reliable, efficient service with skilled technicians for all makes and models.<br />
              <b>Karur Road, Coimbatore</b><br />
              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleOpenModal('123-456-7893')}>Call</Button>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>

        <Card className="hover-card" sx={{ maxWidth: 345 }}>
          <CardMedia
            title="green iguana"
          />
          <img src={kit} style={{ height: '300px' }} alt="Kitchen Appliances" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kitchen Appliances
            </Typography>
            <Typography variant="body2" color="text.secondary">
              All types of kitchen appliances repair service available, super fast repair at your service<br />
              <b>Near Town Hall, Coimbatore</b><br />
              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleOpenModal('123-456-7894')}>Call</Button>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>

        <Card className="hover-card" sx={{ maxWidth: 345 }}>
          <CardMedia
            title="green iguana"
          />
          <img src={homeap} style={{ height: '300px' }} alt="Home Appliances" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Home Appliances
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Any type of household electronic appliances can be serviced with care<br />
              <b>Singanallur, near Bus stand</b><br />
              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleOpenModal('123-456-7895')}>Call</Button>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
      </div>
      <br />
      <CallModal open={modalOpen} handleClose={handleCloseModal} phoneNumber={phoneNumber} />
    </div>
  );
}
