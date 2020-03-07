import { combineReducers } from 'redux'
import homeReducers from './home'

export default combineReducers({
    home: homeReducers
})
