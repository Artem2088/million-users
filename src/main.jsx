import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { App } from "./components/index";
import { store } from "../src/store/index";
import { Provider } from 'react-redux'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
