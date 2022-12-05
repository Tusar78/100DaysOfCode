import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
      </BrowserRouter>
    </>
  );
};

export default App;
