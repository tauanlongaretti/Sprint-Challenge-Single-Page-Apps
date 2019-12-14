// import React, { useState, useEffect } from "react";

// function SearchForm() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResult, setSearchResult] = useState();

//   useEffect(() => {}, [searchTerm]);

//   const handleChange = event => {
//     setSearchTerm(event.target.value);

//     const result = characters.filter(character => {
//       return character.toLowerCase().includes(searchTerm.toLowerCase());
//     });
//     setSearchResult(result);
//   };

//   const test = () => {
//     searchTerm = "search";
//     console.log("search", searchTerm);
//   };

//     console.log("search term", searchTerm);

//   return (
//     <section className="search-form">
//       <form>
//         <label htmlFor="name">Search: </label>
//         <input id="name" type="text" name="textfield" placeholder="Search" onChange={handleChange} value={searchTerm}/>
//       </form>  
//       <div className="character-list">
//         <ul>
//           {searchResult.map(character => {
//             return <li key={character}>{character}</li>;
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default SearchForm;