import axios from 'axios';

// Initialize Xata client (assuming there's a client initialization here if needed)

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      'https://App-Developer-s-workspace-6anock.us-east-1.xata.sh/db/database-cloud:main/your-endpoint',
      userData,
      {
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_XATA_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};