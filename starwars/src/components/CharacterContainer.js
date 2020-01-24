import React from 'react';
import Character from "./Character";


function CharacterContainer({data: {results: characters}}) {
  if (characters === undefined) return (<h1>Loading...</h1>);
  return (
    <div>
      {characters.map((character, i) => <Character character={character} key={i}/>)}
    </div>
  );
}

export default CharacterContainer;
