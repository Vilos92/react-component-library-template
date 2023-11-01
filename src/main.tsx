import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
