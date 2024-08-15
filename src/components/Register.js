import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import regimg from './Images/Register.jpeg';
import './Register.css';
import { auth } from './firebase'; 
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider(); 

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await sendEmailVerification(user);
      
      console.log('Registration successful. Verification email sent.');
      navigate('/home');
    } catch (error) {
      let errorMessage = "Registration failed. Please try again.";

      if (error.code === 'auth/weak-password') {
        errorMessage = "Password should be at least 6 characters.";
      } else if (error.code === 'auth/email-already-in-use') {
        errorMessage = "This email is already in use.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "Invalid email format.";
      }

      console.error("There was an error registering!", error);
      setError(errorMessage);
    }
  };
  const handlesignin=async()=>{
    try{
    const res=await axios.post("http://localhost:8080/reg",{email,password,username})
    navigate("/home")
    }
    catch(err){
      console.log("Error",err);
    }
  }
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User Info:', user);
      
      navigate('/home');
    } catch (error) {
      let errorMessage = "An error occurred. Please try again.";
      
      if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = "The popup was closed before authentication could complete.";
      } else if (error.code === 'auth/network-request-failed') {
        errorMessage = "A network error occurred. Please check your connection.";
      } else if (error.code === 'auth/cancelled-popup-request') {
        errorMessage = "The popup request was canceled.";
      } else if (error.code === 'auth/operation-not-allowed') {
        errorMessage = "The requested operation is not allowed. Make sure your Firebase project settings are configured correctly.";
      }

      console.error("Error during Google sign-in:", error);
      setError(errorMessage);
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className='img-movement'> 
          <img src={regimg} alt="Teamwork" />
        </div>
      </div>
      <div className="right-section">
        <form className="login-form" onSubmit={handleRegister}>
          <h2>Sign up with us</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" onClick={handlesignin} className="login-button">Register</button>
          
          <hr />
          <button type="button" onClick={handleGoogleSignIn} className="google-signin-button">
            Sign in with Google
          </button>
          
          <div className="signup">
            <p>Already have an Account?</p>
            <Link to="/log">
              <button type="button" className="register-button">Sign in</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
