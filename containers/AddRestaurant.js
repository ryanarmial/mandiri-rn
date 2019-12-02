import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  Button,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import axios from 'axios'


export const CustomInput = ({ label, onChange, value}) => (
  <View>
     <Text> { label } </Text>
        <TextInput 
          value={value}
          onChangeText={ (text) => onChange(text)}
          style={{ borderWidth: 1, height: 30, marginBottom: 10}}
        />
  </View>
)

class AddRestaurant extends Component{
  constructor(){
    super()
    this.state = {
      Title: "",
      Description: "",
      image: "",
      Location: "",
      loading: false
    }
  }

  sendDataToApi(){    
    let url = 'http://dummy.rifkifauzi.id/restaurants'
    axios.post(url, {
      Title: this.state.Title,
      Description: this.state.Description,
      image: this.state.image,
      Location: this.state.Location,
    })
      .then( resp => {
        alert('Success')
        this.setState({loading: false})
      })
      .catch( error => {
        alert(JSON.stringify(error))
        this.setState({loading: false}) 
      })
  }

  render(){
    return (
      <View style={{ padding: 20 }}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.goBack()
        }}>
        <Text style={{marginBottom: 20}}> {"<"} Back </Text>
        </TouchableOpacity>

        <CustomInput
          label="Title"
          onChange={text => this.setState({ Title: text })}
        />

        <CustomInput
          label="Description"
          onChange={text => this.setState({ Description: text })}
        />

        <CustomInput
          label="Image"
          onChange={text => this.setState({ image: text })}
        />

        <CustomInput
          label="Location"
          onChange={text => this.setState({ Location: text })}
        />

        <Text>{ JSON.stringify(this.state, null, 2) }</Text>


        { this.state.loading && <ActivityIndicator size="large" color="#0000ff" /> }
        <Button 
          title="Add new Restaurant" 
          onPress={ () => {
            this.setState({ loading: true})
            this.sendDataToApi()
          }}
        />
      </View>
    )
  }
}

export default AddRestaurant