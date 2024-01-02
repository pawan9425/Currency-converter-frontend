import React from "react";
import ReactDOM from "react-dom/client";
import CurrencyConverterForm from "./components/CurrencyConverterForm";
import Header from "./components/Header";

// App component: Renders Header and CurrencyConverterForm components
const App = () => {
  return (
    <div>
      <Header />
      <CurrencyConverterForm />
    </div>
  );
};

// Creating a root for rendering the entire app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component inside the root element
root.render(<App />);

export default App;
