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
import store from '../redux/store'

class Restaurant extends Component{
  constructor(){
    super()
    // property atau attributes
    this.state = {
      message: '',
      restaurants: [
        {
          Title: "RM Garuda",
          image: "https://x1.sdimgs.com/sd_static/a/126827/logo.png",
          Location: "Singapore"
        },
      ],
    }
  }

  ambilDataRestoran(){
    let url = "http://dummy.rifkifauzi.id/restaurants"
    axios.get(url).then(resp => {
      this.setState({ restaurants: resp.data })
    })
  } 

  hapusDataRestoran(item){
    let url = `http://dummy.rifkifauzi.id/restaurants/${item.id}`
    axios
      .delete(url)
      .then(resp => {
        alert(`${item.title} sucessfully deleted`)
        let filteredRestaurants = this.state.restaurants.filter( resto => resto.id != item.id )
        this.setState({
          restaurants: filteredRestaurants
        })
      })
  }

  // DRY - Dont Repeat Yourself
  async componentDidMount(){
    this.ambilDataRestoran()
    const messageFromStorage = await AsyncStorage.getItem('message')
    console.log('1----->', messageFromStorage)
    this.setState({ message: messageFromStorage})
  }


  render(){
    return (
      <View style={{ margin: 30 }}>
        <Text>{store.getState()}</Text>
        <TextInput style={{ borderWidth: 1, height: 30}} onChangeText={(text) => {
          console.log('2----->', text)
          AsyncStorage.setItem('message', text)
        }}/>

        <Tombol
          label="Add restaurant"
          click={() => this.props.navigation.navigate('AddRestaurant') }
        />

        <FlatList
          data={this.state.restaurants}
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


export default Restaurant


