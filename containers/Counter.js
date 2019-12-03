import React from 'react'
import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native'
import store from '../redux/store'



class Counter extends React.Component{
  constructor(){
    super()
    this.state = {
      counter: store.getState().counter,
      step: 1
    }
  }

  componentDidMount(){
    store.subscribe( () => {
      this.setState({
         counter: store.getState().counter,
      })
    })
  }

  render(){
    return(
      <View style={{marginTop: 40}}>
        <Text style={{ fontSize: 75}}> Counter</Text>
        <Text style={{ fontSize: 75}}> { this.state.counter }</Text>
        <TextInput 
          style={{ borderWidth: 1, height: 30}}
          onChangeText={(text) => {
            this.setState({ step: Number(text)})
          }}
          />
        <Button 
          title="INCREMENT"
          onPress={ () => {
              store.dispatch({
                type: 'INC',
                step: this.state.step
              })
          }}
        />
      </View>
    )
  }
}

export default Counter