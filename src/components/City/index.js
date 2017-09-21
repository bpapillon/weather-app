// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import moment from 'moment';
// Externals
import Graph from '../Graph';
import MapImage from '../MapImage';
// Internals
import './styles.css';


const City = ({ name, lat, lng, list }) => {
  const humidityData = map(list, ({ main }) => main.humidity);
  const humidityTimestamps = map(list, (item) => moment(item.dt).format('HH:mm:ss'));
  const tempData = map(list, ({ main }) => main.temp);
  const tempTimestamps = map(list, (item) => moment(item.dt).format('HH:mm:ss'));
  const pressureData = map(list, ({ main }) => main.pressure);
  const pressureTimestamps = map(list, (item) => moment(item.dt).format('HH:mm:ss'));

  return (
    <div className="city">
      <div className="row">
        <div className="col s12 m6">
          <MapImage lng={lng} lat={lat} />
        </div>
        <div className="col s12 m6">
          <Graph
            data={tempData}
            dataTimestamps={tempTimestamps}
            title="Temperature"
            unit="Fahrenheit"
          />
        </div>
        <div className="col s12 m6">
          <Graph
            data={pressureData}
            dataTimestamps={pressureTimestamps}
            title="Pressure"
            unit="Bar"
          />
        </div>
        <div className="col s12 m6">
          <Graph
            data={humidityData}
            dataTimestamps={humidityTimestamps}
            title="Humidity"
            unit="Percentage"
          />
        </div>
      </div>
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
