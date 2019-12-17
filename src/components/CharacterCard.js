import React from "react";
import styled from "styled-components";

const CardStyling = styled.div`
  padding: 0px;
  border: 1px solid black;
  background-color: #f2f2f2; 
`;

const HeaderStyling = styled.h2`
  font-size: 22px; 
`;

function CharacterCard(props) {
  return (
    <CardStyling className="character-card">
      <HeaderStyling>{props.character.name}</HeaderStyling>
      <img src={props.character.image}/>
      <p>Status: {props.character.status}</p>
      <p>Species: {props.character.species}</p>
    </CardStyling>
  );
}

export default CharacterCard;