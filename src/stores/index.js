import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import user from './user'
import common from './common'
const rootReducer = combineReducers({
    user,
    common
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
      )  
) 

export default store