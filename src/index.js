import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <Auth0Provider
            domain="dev-mcydfevirt8835w1.us.auth0.com"
            clientId="odBPcJ92Kgeo3e8NECRgGt7rPZbL64uC"
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
            <App />
          </Auth0Provider>
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
