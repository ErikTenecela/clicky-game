import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Clicky Game
      </a>
      <span>
        <h1>Score: </h1>
        <h1>Top scorer: </h1>
      </span>
    </nav>
  );
}

export default NavBar;
