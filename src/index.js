import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello World!</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
