// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
// Internals
import './styles.css';


const MapImage = ({ lat, lng }) => (
  <div className="google-map">
    <GoogleMapReact key={process.env.GOOGLE_MAPS_KEY} defaultZoom={10} defaultCenter={{ lat, lng }} />
  </div>
);

MapImage.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
}

export default MapImage;
