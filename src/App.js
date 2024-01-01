import React from "react";
import ReactDOM from "react-dom/client";
import CurrencyConverterForm from "./components/CurrencyConverterForm";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <CurrencyConverterForm />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

export default App;
