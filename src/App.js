import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>

        <footer>
          This project was coded by Boma Dapper and is
          <a
            href="https://github.com/Dapper50/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
