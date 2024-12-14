import axios from 'axios';

const apiUrl = import.meta.env.VITE_GITHUB_API_URL;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${apiUrl}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
