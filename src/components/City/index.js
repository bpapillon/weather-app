// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
// Externals
import Graph from '../Graph';
import MapImage from '../MapImage';
// Internals
import './styles.css';


const City = ({ name, lat, lng, list }) => {
  const humidityData = map(list, ({ main }) => main.humidity);
  const tempData = map(list, ({ main }) => main.temp);
  const pressureData = map(list, ({ main }) => main.pressure);

  return (
    <div className="city">
      <MapImage lng={lng} lat={lat} />
      <Graph data={tempData} title="Temperature" />
      <Graph data={pressureData} title="Pressure" />
      <Graph data={humidityData} title="Humidity" />
    </div>
  );
};

City.propTypes = {
  name: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    main: PropTypes.shape({
      humidity: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
};

export default City;
