// import the react libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// find the div with id root
const el = document.getElementById("root");

// take control of the div using react
const root = ReactDOM.createRoot(el);

// show the component on the screen
root.render(<App />);
