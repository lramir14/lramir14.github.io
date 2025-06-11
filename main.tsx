import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // This will import your Home.tsx as the App

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);