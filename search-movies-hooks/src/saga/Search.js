import { put, call, takeLatest} from 'redux-saga/effects'
import {
SEARCH_MOVIE_START,
SEARCH_MOVIE_ERROR,
SEARCH_MOVIE_COMPLETE
} from '../redux/actions/ActionTypes'

// generator function
export function* searchMovie({ payload }) {
    try {
        
    } catch (error) {
        
    }
}

export default function*  Search() {
    yield takeLatest(SEARCH_MOVIE_START, searchMovie)
}