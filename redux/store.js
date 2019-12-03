import { createStore, combineReducers } from 'redux'
import counterReducer from '../redux/reducers/counterReducer'
import restaurantReducer from '../redux/reducers/restaurantReducer'

const reducer = combineReducers({
  counterReducer,
  restaurantReducer,
})

const store = createStore(reducer) 

export default store
