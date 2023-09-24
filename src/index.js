import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/userContext";
import { BrowserRouter } from "react-router-dom";
import { ThreadProvider } from "./context/threadContext";
import { DisplayProvider } from "./context/DisplayNameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <DisplayProvider>
      <ThreadProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThreadProvider>
    </DisplayProvider>
  </UserProvider>
);
