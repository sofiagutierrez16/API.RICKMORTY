import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id} style={{ marginBottom: '50px' }}>
          <strong>{character.name}</strong>
          <img
            src={character.image}
            alt={character.name}
            style={{ width: '150px', marginLeft: '100px' }}
          />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
