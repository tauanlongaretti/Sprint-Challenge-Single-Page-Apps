import React from "react";

function CharacterCard(props) {
  return (
    <div className="character-card">
      <h2>{props.character.name}</h2>
      <img src={props.character.image}/>
      <p>Status: {props.character.status}</p>
      <p>Species: {props.character.species}</p>
    </div>
  );
}

export default CharacterCard;