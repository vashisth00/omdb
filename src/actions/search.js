//each action is a function
import {SEARCH_MOVIE} from './types';


//using thunk to use dispatch 
export const seachMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}