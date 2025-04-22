import React, { useState } from "react";
import searchIcon from "../assets/images/icons/search.svg";

const Search = ({ onSearchChange, searchQuery }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="search">
      <img
        src={searchIcon}
        alt="search-icon"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      />
      {isSearchOpen && (
        <input
          type="text"
          className="search-input"
          placeholder="Search by name, category, etc."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      )}
    </div>
  );
};

export default Search;
