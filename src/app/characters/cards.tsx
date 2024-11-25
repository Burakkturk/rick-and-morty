import React from 'react'
import { Character } from './page'
import Link from 'next/link'

const Cards = ({characters}: {characters: Character[]}) => {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <Link href={`/characters/${character.id}`}>{character.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Cards