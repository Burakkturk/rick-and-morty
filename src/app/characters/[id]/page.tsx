'use client';

import Link from "next/link";
import { Suspense, useState } from "react";
import Cards from "./cards";
import data from "../data.json";

export interface Character {
  id: number;
  name: string;
  status: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

const CharactersPage = async () => {
  // const [selectedCharacter, setSelectedCharacter] = useState('')
  // const response = await fetch("https://rickandmortyapi.com/api/character");
  // const data = await response.json();

  // const characters: Character[] = data.results;
  const characters: Character[] = data;

  const getFilteredData = async () => {

  };

  return (
    <>
      <Link href={"/"}>HOME</Link>
      <h1>Rick & Morty Characters</h1>
      <p>Click a name for details about the character</p>

      <input type="text" />
      <select onChange={(e) => setSelectedCharacter(e.target.value)}>
        <option value="table1">table1</option>
        <option value="table2">table2</option>
        <option value="table3">table3</option>
      </select>
      <button onClick={getFilteredData}>Filter</button>
      

      <Suspense fallback={<p>Characters are loading</p>}>
        <Cards characters={characters} />
      </Suspense>
    </>
  );
};

export default CharactersPage;