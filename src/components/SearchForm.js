import React, { useState } from "react";

export default function SearchForm() {
  const [searchCharacter, setSearchCharacter] = useState("");
  const [searchResult, setSearchResult] = useState();

  useEffect(() => [searchCharacter]);

  const handleChange = event => {
    setSearchCharacter(event.target.value);

    const result = characters.filter(character => {
      return character.toLowerCase().includes(searchCharacter.toLowerCase());
    });
    setSearchResult(result);
  };

  const test = () => {
    searchTerm = "search";
  };

  return (
    <section className="search-form">
      <form onSubmit={(submitHandler)}>
        <label htmlFor="name">Search: </label>
        <input id="name" type="text" name="textfield" placeholder="Search" onChange={handleChange} value={searchTerm}/>
      </form>  
     // Add a search form here
    </section>
  );
}
