import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Chicago" />
        <footer>
          This project was created by Tiffannee Wallace and is{" "}
          <a
            href="https://unrivaled-griffin-2329fe.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github & Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
