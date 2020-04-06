import { put, call, takeLatest} from 'redux-saga/effects'
import {
SEARCH_MOVIE_START,
SEARCH_MOVIE_ERROR,
SEARCH_MOVIE_COMPLETE
} from '../actions/ActionTypes'
import { apiCall } from '../api'


// generator function
export function* searchMovie({ payload }) {
    console.log('saga/searchMovie')
    try {
        console.log('payload',payload)    
        const results = yield call(apiCall, `s=${payload.movieName}`, null, null, 'GET')
        yield put( {type: SEARCH_MOVIE_COMPLETE, results} ) //Redux action to the Reducer
    } catch (error) {
        yield put( {type: SEARCH_MOVIE_ERROR, error} ) //Redux action to the Reducer
    }
}

export default function*  Search() {
    console.log('saga/Search')
    yield takeLatest(SEARCH_MOVIE_START, searchMovie)
}