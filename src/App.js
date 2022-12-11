import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by Tiffannee Wallace and is{" "}
          <a
            href="https://app.netlify.com/sites/unrivaled-tiramisu-c7e2b0/overview"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
