// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
// Externals
import MapImage from '../MapImage';
// Internals
import './styles.css';


const WeatherList = ({ cities }) => (
  <table className="table table-striped weather-list">
    <thead>
      <tr>
        <th>City</th>
        <th>Temperature (Fahrenheit)</th>
        <th>Pressure (hPa)</th>
        <th>Humidity (%)</th>
      </tr>
    </thead>
    <tbody>
      {map(cities, (city) => {
        console.log('city', city);
        return (
          <tr key={city.name}>
            <td>
              <MapImage lng={city.lng} lat={city.lat} />
            </td>

          </tr>
        );
      })}
    </tbody>
  </table>
);

WeatherList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default WeatherList;
