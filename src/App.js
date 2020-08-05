import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";

function App() {
  useEffect(() => {
    fetch("/api/photos")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log("Request successful", json);
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
