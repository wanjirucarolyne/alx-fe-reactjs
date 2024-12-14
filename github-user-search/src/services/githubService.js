import axios from 'axios';

const apiUrl = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com/search/users?q';

/**
 * Fetch advanced search results from GitHub API.
 * @param {Object} query - The search query object with username, location, and minimum repositories.
 * @returns {Promise<Object>} The search results.
 */
export const fetchAdvancedSearchResults = async ({ username, location, repos }) => {
  try {
    let queryString = '';

    // Append username to the query if provided
    if (username) queryString += `${username} `;

    // Append location to the query if provided
    if (location) queryString += `location:${location} `;

    // Append minimum repositories to the query if provided
    if (repos) queryString += `repos:>${repos} `;

    // Construct the API endpoint with the query string
    const response = await axios.get(`${apiUrl}/search/users?q=${encodeURIComponent(queryString)}`);

    // Return the search results
    return response.data;
  } catch (error) {
    throw new Error('Error fetching search results from GitHub API');
  }
};
