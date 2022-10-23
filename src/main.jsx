import React from "react";
import ReactDOM from "react-dom/client";
import { WeatherProvider } from "./contextWeather/ContextWeather";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
