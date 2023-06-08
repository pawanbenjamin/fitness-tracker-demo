import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import AuthProvder from "./components/auth/AuthProvider.jsx";
import RoutinesProvider from "./components/routines/RoutinesProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvder>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvder>
  </React.StrictMode>
);
