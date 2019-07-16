import {
  GET_FETCH,
  GET_SUCCESS,
  GET_FAIL,
} from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  errorMessage: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // loading data
    case GET_FETCH: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case GET_SUCCESS: {
      const newData = action.payload.results

      return {
        ...state,
        isLoading: false,
        characters: newData,
      }
    }
    case GET_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    }
    default:
      return state;
  }
};
