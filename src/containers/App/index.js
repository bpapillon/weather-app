// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Externals
import SearchBar from '../../components/SearchBar';
import Cities from '../../components/Cities';
// Internals
import {
  addCityAction,
  updateSearchTermAction,
} from './actions';
import './styles.css';


class App extends Component {
  render() {
    const { addCity, cities, searchTerm, updateSearchTerm } = this.props;

    return (
      <div className="app container">
      	<SearchBar
          addCity={addCity}
          updateSearchTerm={updateSearchTerm}
          searchTerm={searchTerm}
        />
      	<Cities cities={cities} />
      </div>
    );
  }
}

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  searchTerm: PropTypes.string.isRequired,
  // Action creators
  addCity: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
};

const mapStateToProps = ({ app }) => {
  return {
    cities: app.cities,
    searchTerm: app.searchTerm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCity: (city) => dispatch(addCityAction(city)),
    updateSearchTerm: (event) => dispatch(updateSearchTermAction(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
