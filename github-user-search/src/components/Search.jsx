import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [query, setQuery] = useState(''); // For storing the input value
  const [user, setUser] = useState(null); // For storing user data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(false); // Error state

  // Handle the form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); // Indicate loading state
    setError(false); // Reset error state
    setUser(null); // Clear previous results

    try {
      const data = await fetchUserData(query);
      setUser(data); // Set the user data on success
    } catch (err) {
      setError(true); // Set error state if the user is not found
    } finally {
      setLoading(false); // End the loading state
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

      {/* Conditional rendering for different states */}
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}
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

export default Search;
