import React from "react";
import ReactDOM from "react-dom/client";

const Component = function () {
  return (
    <div>
      <h1>Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />);
