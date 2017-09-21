const config = {
  weather: {
    KEY: process.env.REACT_APP_WEATHER_KEY || 'WEATHER_KEY',
    URL: process.env.REACT_APP_WEATHER_URL || 'WEATHER_URL',
  },
  googleMaps: {
    KEY: process.env.REACT_APP_GOOGLE_MAPS_KEY || 'GOOGLE_MAPS_KEY',
  },
};

export default config;
