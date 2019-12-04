import axios from 'axios'


export const actionFetchRestaurants = () => {
  return (dispatch, getState) => {
    let url = "http://dummy.rifkifauzi.id/restaurants"

    axios.get(url).then( resp => {
      
      dispatch({
        type: "FETCH_RESTAURANT",
        payload: {
          restaurants: resp.data,
        }
      })
    
    })
  }
}
