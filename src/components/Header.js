// Header Component
const Header = () => {
  return (
    // Header Container
    <div className="container">
      <div className="header">
        <img
          className="company-img"
          src="https://dzap.io/static/media/Logo.247f945b94ed1dd9e10731b3be93130b.svg"
          alt="Dzap"
        ></img>
        <a href="https://app.dzap.io/dca">
          <button className="launch-btn">Launch App</button>
        </a>
      </div>
      <div>
        <h1 className="heading">Cryptocurrency Converter</h1>
      </div>
    </div>
  );
};

export default Header;
