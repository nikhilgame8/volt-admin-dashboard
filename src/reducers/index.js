import authReducer from './auth'
import pollReducer from './pollNameInput'
import { combineReducers } from 'redux'

const rootReducer = (state = {}, action) => {
    return state
}

export default combineReducers({
    cart: rootReducer,
    auth: authReducer,
    poll: pollReducer
})