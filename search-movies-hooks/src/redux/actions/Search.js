/**
 * Redux Action object: searchMovie
 */
import {SEARCH_MOVIE_START} from './ActionTypes'

export const searchMovie = payload => ({
    type: SEARCH_MOVIE_START,
    payload
});

