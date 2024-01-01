import React, { useState, useEffect } from "react";
import {
  getCryptoList,
  convertCurrency,
  getSupportedCurrencies,
} from "../services/request.js";

const CurrencyConverterForm = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [supportedCurrenciesList, setSupportedCurrenciesList] = useState([]);
  const [sourceCrypto, setSourceCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCryptoList() {
      try {
        const list = await getCryptoList();
        setCryptoList(list);
        if (list.length > 0) {
          setSourceCrypto(list[0].id);
        }
      } catch (error) {
        setError("Error fetching cryptocurrency list.");
      }
    }
    fetchCryptoList();
  }, []);

  useEffect(() => {
    async function fetchSupportedCurrenciesList() {
      try {
        const list = await getSupportedCurrencies();
        setSupportedCurrenciesList(list);
        const usdIndex = list.findIndex((currency) => currency === "usd");
        if (usdIndex !== -1) {
          setTargetCurrency("usd");
        } else {
          setTargetCurrency(list[0]);
        }
      } catch (error) {
        setError("Error fetching supported currencies list.");
      }
    }
    fetchSupportedCurrenciesList();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sourceCrypto || !amount) {
      setError("Please select a source cryptocurrency and enter an amount.");
      return;
    }

    try {
      const result = await convertCurrency(
        sourceCrypto,
        amount,
        targetCurrency
      );
      console.log(`result is here`, result);
      setConvertedAmount(result.convertedAmount);
      setError("");
    } catch (error) {
      setError("Error converting currency.");
    }
  };

  return (
    <div className="body-container">
      <div className="img container">
        <img
          className="img"
          src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=1380&t=st=1704133697~exp=1704134297~hmac=61b4c9b7922d05ce1093b0adbb04a70af4d5daf3b62460293e4726cd720a3c47"
          alt="image"
        ></img>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            Source Cryptocurrency:
            <select
              className="select"
              value={sourceCrypto}
              onChange={(e) => setSourceCrypto(e.target.value)}
            >
              {cryptoList.map((crypto) => (
                <option key={crypto.id} value={crypto.id}>
                  {crypto.name} ({crypto.symbol})
                </option>
              ))}
            </select>
          </label>
          <br />
          <label className="label">
            Amount:
            <input
              className="input"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <br />
          <label className="label">
            Target Currency:
            <select
              className="select"
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
            >
              {supportedCurrenciesList.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button className="button" type="submit">
            Convert
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {convertedAmount && (
          <p className="p">Converted Amount: {convertedAmount}</p>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverterForm;
