
const counterReducer = (state=0, action) => {
  switch (action.type) {
    case 'INC':
      return state + action.step
    case 'DEC':
      return state - action.step
    default:
      return state
  }
}


export default counterReducer