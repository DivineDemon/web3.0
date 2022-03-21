import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import { TransactionProvider } from "./context/TransactionContext";

ReactDOM.render(
  <TransactionProvider>
    <App />
  </TransactionProvider>,
  document.getElementById("root")
);
