import axios from "axios";

// Base URL for API endpoints
const BASE_URL = "http://localhost:3000";

// Function to fetch the list of top 100 cryptocurrencies
export const getCryptoList = async () => {
  try {
    // Fetch data from the specified endpoint
    const response = await axios.get(`${BASE_URL}/crypto/top100`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching cryptocurrency list: ${error.message}`);
  }
};

// Function to fetch the list of supported currencies for conversion
export const getSupportedCurrencies = async () => {
  try {
    // Fetch data from the specified endpoint
    const response = await axios.get(`${BASE_URL}/crypto/supportedCurrencies`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Error fetching crypto supported currencies list: ${error.message}`
    );
  }
};

// Function to perform currency conversion
export const convertCurrency = async (sourceCrypto, amount, targetCurrency) => {
  try {
    // Fetch data from the conversion endpoint with provided parameters
    const response = await axios.get(`${BASE_URL}/conversion/convert`, {
      params: {
        sourceCrypto,
        amount,
        targetCurrency,
      },
    });
    // Return the converted currency data
    return response.data;
  } catch (error) {
    throw new Error(`Error converting currency: ${error.message}`);
  }
};
