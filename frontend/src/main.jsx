import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ProductosProvider } from "./context/ProductosContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductosProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ProductosProvider>
  </React.StrictMode>
);
