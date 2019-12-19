import React from "react";

function NavBar({ check, total }) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Clicky Game
      </a>
      <span>
        <h1>Score: {check}</h1>
        <h1>Top scorer:{check} </h1>
      </span>
    </nav>
  );
}

export default NavBar;
