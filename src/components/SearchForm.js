import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const ListStyling = styled.div`
  display: inline-block;
  padding: 1%;
  text-align: center;
`;

const FormStyling = styled.form`
  text-align:center;
  margin: 50px;
  font-size: 20px;
`;

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {

          const results = response.data.results.filter(character => {
            return character.name.toLowerCase().includes(searchTerm.toLowerCase());
          });
          
          setSearchResults(results);
        });
    };

    searchCharacters();
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return(
    <div>
      <FormStyling>
        <label htmlFor="name">Search: </label>
        <input 
        id="name"
        type="text"
        name="textfield"
        placeholder="Search for a character"
        onChange={handleChange}
        value={searchTerm}
        />
      </FormStyling>
      <div>
        <ul>
          {searchResults.map(response => {
            return (
              <ListStyling>        
                <CharacterCard key={response.id} character={response}/>
              </ListStyling>
            )})}  
        </ul>
      </div>
    </div> 
  )
}

export default SearchForm;
