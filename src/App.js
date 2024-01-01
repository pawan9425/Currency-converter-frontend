import React from "react";
import ReactDOM from "react-dom/client";
import CurrencyConverterForm from "./components/CurrencyConverterForm";
import ConverterForm from "./components/ConverterForm";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <CurrencyConverterForm />
      <ConverterForm />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

export default App;
