import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./SocketContext";

ReactDOM.render(
  <React.StrictMo>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMo>,
  document.getElementById("root")
);
