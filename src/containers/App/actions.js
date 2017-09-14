import {
  UPDATE_SEARCH_TERM,
} from './constants';

export function updateSearchTermAction(searchTerm) {
  return {
    type: UPDATE_SEARCH_TERM,
    searchTerm,
  };
}
