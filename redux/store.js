import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'

import counterReducer from '../redux/reducers/counterReducer'
import restaurantReducer from '../redux/reducers/restaurantReducer'


const reducer = combineReducers({
  counterReducer,
  restaurantReducer
})

const middleware = applyMiddleware(thunk)
const store = createStore(reducer, middleware) 

export default store
