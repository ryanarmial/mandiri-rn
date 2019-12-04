import React, { Component, Hello } from 'react'
import { 
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  AsyncStorage
} from 'react-native'
import axios from 'axios'
import Tombol from '../components/Tombol'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { actionFetchRestaurants } from '../redux/actions/restaurantAction'

class Restaurant extends Component{
  constructor(){
    super()
    // property atau attributes
    this.state = {
      message: '',
    }
  }



  hapusDataRestoran(item){

    let url = `http://dummy.rifkifauzi.id/restaurants/${item.id}`
    axios
      .delete(url)
      .then(resp => {
        alert(`${item.title} sucessfully deleted`)
        let filteredRestaurants = this.props.listRestaurants.filter( resto => resto.id != item.id )
        this.setState({
          restaurants: filteredRestaurants
        })
      })
  }

  // DRY - Dont Repeat Yourself
  componentDidMount(){
    this.props.fetchRestaurants()
  }


  render(){
    return (
      <View style={{ margin: 30 }}>
        <TextInput style={{ borderWidth: 1, height: 30}} onChangeText={(text) => {
          AsyncStorage.setItem('message', text)
        }}/>

        <Tombol
          label="Add restaurant"
          click={() => this.props.navigation.navigate('AddRestaurant') }
        />

        <FlatList
          data={this.props.listRestaurants}
          keyExtractor={ (item,i) => i.toString() }
          renderItem={ ({ item }) => {
            return <TouchableOpacity
              onPress={ () => this.props.navigation.navigate('EditRestaurant', {resto: item} )}
            >
            <View style={{ flexDirection: 'row', backgroundColor: '#eee', marginVertical: 5}}>
              <Image 
                source={{ uri: item.image }} 
                style={{ height: 100, width: 100}}
              />
              <View style={{ marginLeft: 20}}>
                <Text>{item.Title}</Text>
                <Text>{item.Location}</Text>
              </View>
             
              <View>
                <TouchableOpacity onPress={ () => {
                  this.hapusDataRestoran(item)
                }}>
                  <Text style={{color: 'red'}}> Delete </Text>
                </TouchableOpacity>
              </View>
            </View>
            </TouchableOpacity>
          }}
        />

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listRestaurants:  state.restaurantReducer.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurants: () => dispatch(actionFetchRestaurants())
   }
}

const connectedRestaurant = connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurant)

export default connectedRestaurant


