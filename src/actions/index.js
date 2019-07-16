import axios from 'axios';

// action types
export const GET_FETCH = 'GET_FETCH'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_FAIL = 'GET_FAIL'

// action creator 
export function fetchCharacter() {
    // action
    return (dispatch) => {
        dispatch({ 
            type: GET_FETCH
         })

         axios.get('https://swapi.co/api/people')
            .then((res) => {
                dispatch({
                    type: GET_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: GET_FAIL,
                    payload: err.res.data
                })
            })
    }
}

// action creator in es6
// export const fetchCharacter = () => dispatch => {
//     dispatch({ 
//         type: GET_FETCH
//     })
// }


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
