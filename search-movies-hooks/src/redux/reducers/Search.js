/**
 * Redux Reducer for Search component
 */
import { get } from 'lodash'
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
            return { ...state}
        case SEARCH_MOVIE_ERROR:           
            return { ...state}
        case SEARCH_MOVIE_COMPLETE:           
            return { ...state}
        default:
            return { ...state}
    }
}