import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyling = styled.div`
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
`;

const NavStyling = styled.div`
  display: flex;
  justify-content: space-around;
`;


export default function Header() {
  return (
    <HeaderStyling className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavStyling className="Navigation">
        <Link to='/' className="home-button">Home</Link>
        <Link to='/characters' className="characters-button">Characters</Link>
      </NavStyling>
    </HeaderStyling>
  );
}
