import { all } from 'redux-saga/effects'

import  Search from './Search'

export default function* rootSaga() {
    yield all([
        Search
    ])
}