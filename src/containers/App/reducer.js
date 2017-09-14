const {
  UPDATE_SEARCH_TERM,
} from './constants';

const initialState = {
  cities: [],
  searchTerm: '',
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
