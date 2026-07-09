import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);

// Register Service Worker for Offline PWA support
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
        console.log("Service Worker registered with scope: ", reg.scope);
      })
      .catch((err) => {
        console.error("Service Worker registration failed: ", err);
      });
  });
}
