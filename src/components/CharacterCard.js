import React from "react";

function CharacterCard(props) {
  return (
    <div className="character-card">
      <h2>Name: {props.character.name}</h2>
      <h2>Status: {props.character.status}</h2>
      <h2>Species: {props.character.species}</h2>
    </div>
  );
}

export default CharacterCard;