import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { apply } from "@richaadgigi/stylexui";
import "@richaadgigi/stylexui/css/xui.css";
import App from "./App";
import "./index.css";

apply();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
