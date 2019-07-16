import {
  GET_FETCH,
  GET_SUCCESS,
  GET_FAIL,
} from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  errorMessage: '',
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
