import React from 'react';

function UserCard({ user }) {
  return (
    <div>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <h2>{user.login}</h2>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
}

export default UserCard;
