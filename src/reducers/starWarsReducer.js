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
        errorMessage: null,
      }
    }
    case GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        characters: [...state.characters, ...action.payload]
        // errorMessage: null,
      }
    }
    case GET_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
