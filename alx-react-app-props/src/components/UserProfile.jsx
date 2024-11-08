// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from './components/UserContext';

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;
