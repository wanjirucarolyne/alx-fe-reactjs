import React, { useState } from 'react';
import { fetchAdvancedSearchResults } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);

    try {
      const query = {
        username: username.trim(),
        location: location.trim(),
        repos: repos.trim(),
      };
      const data = await fetchAdvancedSearchResults(query);
      setResults(data.items); // GitHub API returns results in the "items" array.
    } catch (err) {
      setError('An error occurred while fetching results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="GitHub username"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, country, etc."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="repos" className="block text-sm font-medium text-gray-700">
            Minimum Repositories
          </label>
          <input
            id="repos"
            type="number"
            value={repos}
            onChange={(e) => setRepos(e.target.value)}
            placeholder="Number of repositories"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-indigo-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {results.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Search Results:</h2>
          <ul className="space-y-4">
            {results.map((user) => (
              <li key={user.id} className="p-4 bg-gray-100 rounded-md shadow-sm">
                <div className="flex items-center space-x-4">
                  <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="text-lg font-semibold">{user.login}</h3>
                    <p className="text-sm text-gray-600">
                      Location: {user.location || 'Not specified'}
                    </p>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
