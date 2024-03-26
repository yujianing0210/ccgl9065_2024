import React, { useState } from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div>
      <input
      type="text"
      placeholder="Search by student name..."
      value={searchTerm}
      onChange={e => onSearchChange(e.target.value)} // Lifting the state up
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;