// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
// Externals
import City from '../City';
// Internals
import './styles.css';


const Cities = ({ cities }) => (
  <div className="cities">
    {map(cities, ({ id, name, lat, lng, list }) => (
      <City
        key={id}
        name={name}
        lat={lat}
        lng={lng}
        list={list}
      />
    ))}
  </div>
);

Cities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Cities;
