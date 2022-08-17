import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FunctComponent from "./Question1/functCommponent";
import ClassComponent from "./Question1/classComponent";
import ClickCounter from "./Question2/ClickCounter";
import Lifecycle from "./Question3/Lifecycle";
import Hookexample from "./Question4/Hookexample";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FunctComponent />
    <ClassComponent />
    <ClickCounter />
    <Lifecycle counter="100" />
    <Hookexample />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
