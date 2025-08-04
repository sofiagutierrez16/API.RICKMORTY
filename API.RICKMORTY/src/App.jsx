import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import CharacterList from './components/CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        console.log('Respuesta fetch:', response);
        const data = await response.json();
        console.log('Datos recibidos:', data);
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCharacters();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div style ={{ padding: '200px' }}>
      <h1>Rick and Morty</h1>
      <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
}

export default App;

