import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/shared/navbar/Navbar.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.ts";
import AntdFooter from "./components/shared/footer/Footer.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <App />
        <AntdFooter />
      </BrowserRouter>
      <Toaster position="top-right" />
    </Provider>
  </StrictMode>
);
