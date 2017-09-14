// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Externals
import SearchBar from '../../components/SearchBar';
import WeatherList from '../../components/WeatherList';
// Internals
import {
  updateSearchTermAction,
} from './actions';
import './styles.css';


class App extends Component {
  render() {
    const { searchTerm, updateSearchTerm } = this.props;
    return (
      <div className="app">
      	<SearchBar
          updateSearchTerm={updateSearchTerm}
          searchTerm={searchTerm}
        />
      	<WeatherList />
      </div>
    );
  }
}

App.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  // Action creators
  updateSearchTerm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    searchTerm: state.app.searchTerm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchTerm: (event) => dispatch(updateSearchTermAction(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
