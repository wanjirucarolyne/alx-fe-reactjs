import axios from 'axios';

const apiUrl = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';

/**
 * Fetch user data from GitHub API.
 * @param {string} username - The GitHub username to search.
 * @returns {Promise<Object>} The user data.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${apiUrl}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
