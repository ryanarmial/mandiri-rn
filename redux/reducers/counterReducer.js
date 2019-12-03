
const counterReducer = (state=99, action) => {
  console.log('------masuk reducer', action)
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