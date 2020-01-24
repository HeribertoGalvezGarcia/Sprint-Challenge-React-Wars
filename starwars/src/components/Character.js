import React from 'react';
import styled from "styled-components";


const StyledCharacter = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-shadow: 1px 1px 5px #000;
  background-color: #70707070;
`;


const StyledInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledP = styled.p`
  width: 30%;
`;


function Character({character: {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, films, vehicles, starships}}) {
  return (
    <StyledCharacter>
      <h3>{name}</h3>
      <StyledInfo>
        <StyledP>Height - {height}</StyledP>
        <StyledP>Mass - {mass}kg</StyledP>
        <StyledP>Hair Color - {hair_color}</StyledP>
        <StyledP>Skin Color - {skin_color}</StyledP>
        <StyledP>Eye Color - {eye_color}</StyledP>
        <StyledP>Birth Year - {birth_year}</StyledP>
        <StyledP>Gender - {gender}</StyledP>
        <StyledP>Films - {films.length}</StyledP>
        <StyledP>Vehicles - {vehicles.length}</StyledP>
        <StyledP>Starships - {starships.length}</StyledP>
      </StyledInfo>
    </StyledCharacter>
  );
}

export default Character;
