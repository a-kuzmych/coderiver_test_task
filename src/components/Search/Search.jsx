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
      <button className="search__button" onClick={handleSearchClick} />
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
