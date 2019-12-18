import React, { useState } from "react";
import NavBar from "./Assets/NavBar/NavBar";
import Data from "./Assets/Card/Data";
import Card from "./Assets/Card/Card";
import Jumbotron from "./Assets/Jumbotron";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <div className="wrapper">
        {Data.map(each => (
          <Card {...each} key={each.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
