// src/components/ProfilePage.js
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-right: 20px;
`;

const UserName = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const UserDetails = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #555;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {}; // Retrieve user data from localStorage

  return (
    <ProfileContainer>
      <ProfileHeader>
        <Avatar src="https://via.placeholder.com/120" alt="User Avatar" />
        <UserName>{user.firstName} {user.lastName}</UserName>
      </ProfileHeader>
      <UserDetails>
      
        <p>Name: Hariharan A T</p>
        <p>Email: hariharanthirup@gmail.com</p>
        <p>Phone: (91+) 7708587027</p>
        <p>Address: B.K Pudur, Coimbatore</p>
      </UserDetails>
      <Button>Edit Profile</Button>
    </ProfileContainer>
  );
};

export default ProfilePage;
