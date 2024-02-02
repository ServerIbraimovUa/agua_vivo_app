import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./main.ts";

import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/agua_vivo_app">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
