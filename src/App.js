import React, { useState } from "react";
import NavBar from "./Assets/NavBar";
import Data from "./Assets/Data";
import Card from "./Assets/Card";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      {Data.map(each => (
        <Card {...each} key={each.id} />
      ))}
    </div>
  );
};

export default App;
