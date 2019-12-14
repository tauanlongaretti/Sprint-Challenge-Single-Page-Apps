import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard"

function CharacterList () {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getCharacters();
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return (
        <Link to={`/characters/${character.id}`} key={character.id}>
        <CharacterCard/>
        </Link>
        );
        })}
    </section>
  );
}

export default CharacterList;