
const defaultState = {
  restaurants: [
    {
      Title: "RM Garuda",
      image: "https://x1.sdimgs.com/sd_static/a/126827/logo.png",
      Location: "Singapore"
    },
  ]
}

const restaurantReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANT':
      newState = {...state, restaurants: action.payload.restaurants }
      return newState
    default:
      return state
  }
}

export default restaurantReducer