// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header,{Footer}  from "./Header";

// Directly render the JSX without a separate App component
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <App />
    <Footer/>
  </>
);
