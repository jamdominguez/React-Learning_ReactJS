/**
 * Redux Reducer for Search component
 */
import {
    SEARCH_MOVIE_START,
    SEARCH_MOVIE_ERROR,
    SEARCH_MOVIE_COMPLETE
} from '../actions/ActionTypes'

const INITIAL_STATE = {}

//reducer
export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_MOVIE_START:           
            return { ...state, isLoading: true}
        case SEARCH_MOVIE_ERROR:           
            return { ...state, isLoading: false, movies: null}
        case SEARCH_MOVIE_COMPLETE:           
            return { ...state, isLoading: false, movieResults: action.results.data}
        default:
            return { ...state}
    }
}