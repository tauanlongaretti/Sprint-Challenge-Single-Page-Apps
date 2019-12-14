import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="Navigation">
        <Link to='/' className="home-button">Home</Link>
        <Link to='/characters' className="characters-button">Characters</Link>
      </div>
    </header>
  );
}
