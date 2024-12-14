import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function SearchBar() {
  const [query, setQuery] = useState(''); // For storing user input
  const [user, setUser] = useState(null); // For storing user data from the API
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(false); // Error state

  // Handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(query);
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Search</button>
      </form>

      {/* Display different states */}
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user.</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
          <h2>{user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
