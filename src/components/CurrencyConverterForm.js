const CurrencyConverterForm = () => {
  return (
    <div className="currency-converter-container">
      <div className="data-container">
        <img
          className="data-img-container"
          src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=1380&t=st=1704133697~exp=1704134297~hmac=61b4c9b7922d05ce1093b0adbb04a70af4d5daf3b62460293e4726cd720a3c47"
          alt="company-logo"
        ></img>
      </div>
      <div className="form-container">
        <form>
          <label>
            Source Cryptocurrency:
            <select></select>
          </label>
          <br />
          <label>
            Amount:
            <input type="number" />
          </label>
          <br />
          <label>Target Currency:</label>
          <select></select>
          <br />
          <button type="submit">Convert</button>
        </form>
      </div>
    </div>
  );
};

export default CurrencyConverterForm;
