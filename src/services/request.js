import axios from "axios";

// For deployed backend APIs

const BASE_URL =
  "https://backend-bitfb87bu-pawan-kumars-projects-a5803662.vercel.app";

// For local backend APIs

// const BASE_URL = " http://localhost:5000";

const token = "YHPkEf8u8bHNK1YoIwK1cLf3";

// Function to create headers with the token
const getHeaders = () => ({
  headers: {
    "x-access-token": token, // Include the token as x-access-token in the headers
  },
});

// Function to fetch the list of top 100 cryptocurrencies
export const getCryptoList = async () => {
  try {
    // Fetch data from the specified endpoint
    const response = await axios.get(`${BASE_URL}/crypto/top100`, getHeaders());
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching cryptocurrency list: ${error.message}`);
  }
};

// Function to fetch the list of supported currencies for conversion
export const getSupportedCurrencies = async () => {
  try {
    // Fetch data from the specified endpoint
    const response = await axios.get(
      `${BASE_URL}/crypto/supportedCurrencies`,
      getHeaders()
    );
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
      ...getHeaders(),
    });
    // Return the converted currency data
    return response.data;
  } catch (error) {
    throw new Error(`Error converting currency: ${error.message}`);
  }
};
