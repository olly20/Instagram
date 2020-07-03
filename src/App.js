import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import ImageGallery from "./components/Content/ImageGallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <ImageGallery />
    </div>
  );
}

export default App;
