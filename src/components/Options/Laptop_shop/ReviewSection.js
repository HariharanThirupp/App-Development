import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const ReviewContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  border: '1px solid #ddd',
  borderRadius: '8px',
}));

const ReviewHeader = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const ReviewItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  border: '1px solid #ddd',
  borderRadius: '8px',
}));

const ReviewForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'John Doe',
      rating: 4,
      comment: 'Great service and very professional!',
    },
    {
      name: 'Jane Smith',
      rating: 5,
      comment: 'Highly recommended for all your laptop repair needs.',
    },
  ]);

  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, rating, comment };
    setReviews([...reviews, newReview]);
    setName('');
    setRating(0);
    setComment('');
  };

  return (
    <ReviewContainer>
      <ReviewHeader>Customer Reviews</ReviewHeader>
      {reviews.map((review, index) => (
        <ReviewItem key={index}>
          <Typography variant="h6">{review.name}</Typography>
          <Rating name="read-only" value={review.rating} readOnly />
          <Typography variant="body1">{review.comment}</Typography>
        </ReviewItem>
      ))}
      <ReviewHeader>Leave a Review</ReviewHeader>
      <ReviewForm onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Rating
          name="rating"
          value={rating}
          onChange={(e, newValue) => setRating(newValue)}
          precision={0.5}
          size="large"
        />
        <TextField
          label="Comment"
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Submit Review
          </Button>
        </Stack>
      </ReviewForm>
    </ReviewContainer>
  );
};

export default ReviewSection;
