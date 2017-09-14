// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getWeatherDetails } from '../../api';


class SearchBar extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    addCity: PropTypes.func.isRequired,
    updateSearchTerm: PropTypes.func.isRequired,
  };

  onSearch = () => {
    getWeatherDetails(this.props.searchTerm, ({ city }) => {
      this.props.addCity(city);
    });
  }

  render() {
    const { onSearch } = this;
    const { searchTerm, updateSearchTerm } = this.props;

    return (
      <div className="search-bar">
        <input
          onChange={updateSearchTerm}
          onKeyDown={({ keyCode }) => keyCode === 13 ? onSearch() : undefined}
          placeholder="Search for a city in the USA..."
          type="text"
          value={searchTerm}
        />
        <button onClick={onSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
