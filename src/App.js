import React, { useState } from "react";
import NavBar from "./Assets/NavBar/NavBar";
import Data from "./Assets/Card/Data";
import Card from "./Assets/Card/Card";
import Jumbotron from "./Assets/Jumbotron";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const shuffleCards = id => {
    Data.sort((x, y) => x - y);
  };

  console.log(count);
  return (
    <div className="App">
      <NavBar check={count} total={count} />
      <Jumbotron />
      <div className="wrapper">
        {Data.map(each => (
          <Card
            {...each}
            key={each.id}
            onClick={increment}
            onChange={shuffleCards(each.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
