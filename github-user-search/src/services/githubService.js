import axios from 'axios';

const apiUrl = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';

/**
 * Fetch advanced search results from GitHub API.
 * @param {Object} query - The search query object with username, location, and repos.
 * @returns {Promise<Object>} The search results.
 */
export const fetchAdvancedSearchResults = async ({ username, location, repos }) => {
  try {
    let queryString = '';
    if (username) queryString += `${username} `;
    if (location) queryString += `location:${location} `;
    if (repos) queryString += `repos:>${repos} `;

    const response = await axios.get(`${apiUrl}/search/users?q=${encodeURIComponent(queryString)}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching search results');
  }
};
