
import {CHANGE_SEARCH_FIELD, REQUEST_PEOPLE_PENDING, REQUEST_PEOPLE_SUCCESS, REQUEST_PEOPLE_FAILED} from './constants.js'


//redux
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

const apiCall = (link) =>
  fetch(link).then(response => response.json())
  

  //redux
export const requestPeople = () => (dispatch) => {

    dispatch({type: REQUEST_PEOPLE_PENDING});
    apiCall('https://jsonplaceholder.typicode.com/users') 
       .then(data => dispatch({ type: REQUEST_PEOPLE_SUCCESS, payload: data}))
       .catch(error => dispatch({type: REQUEST_PEOPLE_FAILED, payload: error}))
}

