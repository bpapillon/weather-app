// Dependencies
import React from 'react';
import PropTypes from 'prop-types';


const SearchBar = ({ searchTerm, updateSearchTerm }) => (
  <input
    className="search-bar"
    onChange={updateSearchTerm}
    type="text"
    value={searchTerm}
  />
);

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
