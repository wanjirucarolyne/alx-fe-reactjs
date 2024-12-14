import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults(null);

    try {
      const data = await fetchUserData({ username, location, minRepos });
      setResults(data.items || []); // The `items` field contains the list of users
    } catch (err) {
      setError('Looks like we can’t find the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Minimum Repositories:</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Enter minimum repositories"
            className="border p-2 w-full rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      <div className="mt-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Looks like we cant find the user</p>}
        {results && results.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
            {results.map((user) => (
              <div
                key={user.id}
                className="border p-4 rounded shadow hover:shadow-lg transition"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <h2 className="text-center font-semibold">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-center block mt-2"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        )}
        {results && results.length === 0 && !loading && (
          <p>No users found matching the criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
