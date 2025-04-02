import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StateProvider from "./context/StateProvider.jsx";
import SocketProvider from "./context/SocketProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StateProvider>
      <SocketProvider>
        <App />
      </SocketProvider>
    </StateProvider>
  </BrowserRouter>
);
