// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import get from 'lodash/get';
// Externals
import config from '../../api/config';
// Internals
import './styles.css';
const key = get(config, 'googleMaps.KEY');


const MapImage = ({ lat, lng }) => (
  <div className="google-map">
    <GoogleMapReact
      bootstrapURLKeys={{ key }}
      defaultCenter={{ lat, lng }}
      defaultZoom={10}
    />
  </div>
);

MapImage.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
}

export default MapImage;
