import React from 'react';

const SearchBox = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar personajes..."
      value={searchTerm}
      onChange={onSearchChange}
      style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
    />
  );
};

export default SearchBox;
