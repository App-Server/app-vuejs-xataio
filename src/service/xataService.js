// src/service/xataService.js

import axios from 'axios';

const apiUrl = 'https://App-Developer-s-workspace-6anock.us-east-1.xata.sh/db/database-cloud:main/your-endpoint';
const apiKey = import.meta.env.VITE_XATA_API_KEY;
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(apiUrl, userData, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const getXataClient = () => {
  // Initialize and return the Xata client here if needed
};
