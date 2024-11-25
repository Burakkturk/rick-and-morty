'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import Cards from "./cards";

export interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

const CharactersPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("");

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
      setFilteredCharacters(data.results); // Initialize with all characters
    };
    fetchCharacters();
  }, []);

  // Filtering logic
  const getFilteredData = () => {
    if (selectedFilter === "status") {
      setFilteredCharacters(characters.filter((char) => char.status === "Alive"));
    } else if (selectedFilter === "gender") {
      setFilteredCharacters(characters.filter((char) => char.gender === "Male"));
    } else {
      setFilteredCharacters(characters); // Reset to show all characters
    }
  };

  return (
    <>
      <Link href={"/"}>HOME</Link>
      <h1>Rick & Morty Characters</h1>
      <p>Click a name for details about the character</p>

      <input type="text" placeholder="Search characters" />
      <select onChange={(e) => setSelectedFilter(e.target.value)}>
        <option value="">All</option>
        <option value="status">Status (Alive)</option>
        <option value="gender">Gender (Male)</option>
      </select>
      <button onClick={getFilteredData}>Filter</button>

      {filteredCharacters.length > 0 ? (
        <Cards characters={filteredCharacters} />
      ) : (
        <p>No characters found.</p>
      )}
    </>
  );
};

export default CharactersPage;
