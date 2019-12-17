import React from "react";
import styled from "styled-components";

const WelcomePageStyling = styled.div`
  margin: 70px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
`;

const HeaderOne = styled.h1`
  font-size: 30px;
  margin: 80px;
`;

export default function WelcomePage() {
  return (
    <WelcomePageStyling className="welcome-page">
      <header>
        <HeaderOne>Welcome to the ultimate fan site!</HeaderOne>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </WelcomePageStyling>
  );
}