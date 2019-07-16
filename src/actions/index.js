// we'll need axios
import axios from 'axios';

// action types
export const GET_FETCH = 'GET_FETCH'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_FAIL = 'GET_FAIL'

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
