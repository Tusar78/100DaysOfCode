import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import PageNotFound from "./Components/PageNotFound";
import "./App.css";
import Post from "./Components/Post";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/post/:category" component={Post} />

          <Route exact component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
