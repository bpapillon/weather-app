// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getWeatherDetails } from '../../api';

import './styles.css'

class SearchBar extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    addCity: PropTypes.func.isRequired,
    updateSearchTerm: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  onChangeHandler = (event) => {
    if (this.state.error) {
      this.setState({ error: false });
    }
    this.props.updateSearchTerm(event);
  }

  onSearch = () => {
    getWeatherDetails(this.props.searchTerm, (res) => {
      const statusCode = parseInt(res.cod, 10);
      if (statusCode < 200 || statusCode >= 300) {
        // Error fetching city data.
        this.setState({ error: true });
        return;
      }

      // Great, now let's normalize the data since we have it by
      // putting our weather data INTO our city object.
      const { city, list } = res;
      city.lng = city.coord.lon;
      city.lat = city.coord.lat;
      city.list = list;
      delete city.coord;

      // Fantastic, let's add our city now.
      this.props.addCity(city);
    });
  }

  render() {
    const { onChangeHandler, onSearch } = this;
    const { searchTerm } = this.props;
    const { error } = this.state;

    return (
      <div className="searchform center">
        <p style={{ display: error ? 'inherit' : 'none' }}>Oops, something happened! Try again...</p>
        <input
          onChange={onChangeHandler}
          onKeyDown={({ keyCode }) => keyCode === 13 ? onSearch() : undefined}
          placeholder="Search by city..."
          type="text"
          value={searchTerm}
        />
        <button className="waves-effect waves-light btn" onClick={onSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
