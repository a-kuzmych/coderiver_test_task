import React, { useState } from 'react';
import './Search.scss';

const Search = () => {
  const [isSearchActive, setSearchActive] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleBlur = () => {
    setSearchActive(false);
  };

  return (
    <div className="search">
      <button className="search__button" onClick={handleSearchClick}>
        <img src="/src/assets/img/header/search.svg" alt="Search" width="37" height="37"/>
      </button>

      {isSearchActive && (
        <input
          type="text"
          placeholder="Search..."
          className="search__input"
          onBlur={handleBlur}
        />
      )}
    </div>
  );
};

export default Search;
