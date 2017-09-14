// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Internals
import './styles.css';


class App extends Component {
  render() {
    return (
      <div className="app">
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}

export default connect()(App);
