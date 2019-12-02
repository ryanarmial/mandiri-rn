import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Button,
  ActivityIndicator
} from 'react-native'
import { CustomInput } from './AddRestaurant'
import axios from 'axios'

class EditRestaurant extends Component {
  constructor(props){
    super()
    let { resto } = props.navigation.state.params
    this.state = {
      id: resto.id,
      Title: resto.Title,
      Description: resto.Description,
      image: resto.image,
      Location: resto.Location,
      loading: false,
    }
  }

  updateRestaurant(){
    let url = `http://dummy.rifkifauzi.id/restaurants/${this.state.id}`
    axios.put(url, {
      Title: this.state.Title,
      Description: this.state.Description,
      image: this.state.image,
      Location: this.state.Location,
    })
    .then( resp => {
      alert('Success')
      this.setState({loading: false})
      this.props.navigation.goBack()
    })
  }

  render(){
    
    return(
      <View style={{ padding: 20 }}>
      <TouchableOpacity onPress={() => {
        this.props.navigation.goBack()
      }}>
  
      <Text style={{marginBottom: 20}}> {"<"} Back </Text>
      </TouchableOpacity>

      <CustomInput
        label="Title"
        value={this.state.Title}
        onChange={text => this.setState({ Title: text })}
      />

      <CustomInput
        label="Description"
        value={this.state.Description}
        onChange={text => this.setState({ Description: text })}
      />

      <CustomInput
        label="Image"
        value={this.state.image}
        onChange={text => this.setState({ image: text })}
      />

      <CustomInput
        label="Location"
        value={this.state.Location}
        onChange={text => this.setState({ Location: text })}
      />


      { this.state.loading && <ActivityIndicator size="large" color="#0000ff" /> }
      <Button 
        title="Update Restaurant" 
        onPress={ () => {
          this.setState({ loading: true})
          this.updateRestaurant()
        }}
      />
    </View>
    )
  }
}

export default EditRestaurant