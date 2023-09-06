import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store.ts";
import { App as AppAntd } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppAntd>
          <App />
        </AppAntd>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
