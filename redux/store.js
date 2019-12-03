import { createStore } from 'redux'

const defaultState = {
  counter: 0
}

// pure function
const reducer = (state=defaultState, action) => {

  switch (action.type) {
    case 'INC':
      const newState = { counter: state.counter + action.step}
      return newState
    case 'DEC':
      
    default:
      return state
  }

}

const store = createStore(reducer)

export default store