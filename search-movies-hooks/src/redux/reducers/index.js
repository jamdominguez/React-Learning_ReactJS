/**
 * Redux Reducers index, provides all reducers
 */
import { combineReducers } from 'redux'
import Search from './Search'
import DemoReducer from './DemoReducer'

const rootReducer = combineReducers({
    Search,
    DemoReducer
})

export default rootReducer