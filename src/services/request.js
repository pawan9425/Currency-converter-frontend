import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getCryptoList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/crypto/top100`);
    console.log(`response`, response);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching cryptocurrency list: ${error.message}`);
  }
};

export const getSupportedCurrencies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/crypto/supportedCurrencies`);
    console.log(`response`, response);
    return response.data;
  } catch (error) {
    throw new Error(
      `Error fetching crypto supported currencies list: ${error.message}`
    );
  }
};

export const convertCurrency = async (sourceCrypto, amount, targetCurrency) => {
  try {
    const response = await axios.get(`${BASE_URL}/conversion/convert`, {
      params: {
        sourceCrypto,
        amount,
        targetCurrency,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error converting currency: ${error.message}`);
  }
};
