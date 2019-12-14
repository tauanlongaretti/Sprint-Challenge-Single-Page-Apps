import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"

export default function App() {
  const [character, setCharacter] = useState([]);

  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage}></Route>
      <Route path='/characters' 
        render={routeProps => {
          return <CharacterList {...routeProps} characters={character} />
        }}
      />    
    </main>
  );
};
