import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { Container, Paper, TextField, FormControl, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material';
import { auth, provider, signInWithPopup } from './firebase'; // Adjust the import according to your setup

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // You can get additional user info from the result object if needed
      console.log('User Info:', result.user);
      // Redirect to home or handle the user information
      window.location.href = '/home';
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
      setError('Failed to sign in with Google. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your existing login logic
    try {
      // Replace this with your login logic
      console.log('Email:', email, 'Password:', password);
      // Redirect or handle the user login
      window.location.href = '/home';
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" style={{ marginBottom: '20px' }}>
          Welcome back!
        </Typography>
        <form className="login-form" style={{ width: '100%' }} onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="role-label">Login as</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              variant="outlined"
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          {error && (
            <Typography color="error" variant="body2" style={{ marginTop: 8 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 16 }}
          >
            Login
          </Button>
          <div className="pass" style={{ marginTop: 8, textAlign: 'center' }}>
            Forgot password?
          </div>
          <hr style={{ margin: '16px 0' }} />
          <Button
            type="button"
            variant="outlined"
            color="primary"
            style={{ marginTop: 8 }}
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </Button>
          <div className="signup" style={{ textAlign: 'center' }}>
            <Typography variant="body2">
              Don't have an Account?
            </Typography>
            <Link to="/reg">
              <Button
                type="button"
                variant="outlined"
                color="primary"
                style={{ marginTop: 8 }}
              >
                Sign up
              </Button>
            </Link>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
