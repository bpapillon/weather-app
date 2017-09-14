import config from './config';
const { weather } = config;

export function getWeatherDetails(city, cb) {
  return fetch(`${weather.URL}${weather.KEY}&q=${city},us&units=imperial`)
    .then((res) => res.json())
    .then(cb);
}
