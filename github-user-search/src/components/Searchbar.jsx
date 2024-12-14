import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
