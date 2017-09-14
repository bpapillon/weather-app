import {
  ADD_CITY,
  UPDATE_SEARCH_TERM,
} from './constants';

export function addCityAction(city) {
  return {
    type: ADD_CITY,
    city,
  };
}

export function updateSearchTermAction(searchTerm) {
  return {
    type: UPDATE_SEARCH_TERM,
    searchTerm,
  };
}
