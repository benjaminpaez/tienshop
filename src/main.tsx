import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router } from "wouter";
import './main.css'
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);