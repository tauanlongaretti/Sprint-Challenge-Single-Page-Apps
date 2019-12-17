import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyling = styled.div`
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 10px;
  background-color: #0066cc;
  border-radius: 20px;
`;

const NavStyling = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0px 300px;
  font-size: 25px;
`;

export default function Header() {
  return (
    <HeaderStyling className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavStyling className="Navigation">
        <StyledLink to='/' className="home-button">Home</StyledLink>
        <StyledLink to='/characters' className="characters-button">Characters</StyledLink>
      </NavStyling>
    </HeaderStyling>
  );
}
