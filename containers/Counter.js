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
      counter: store.getState().counterReducer,
      step: 1
    }
  }

  componentDidMount(){
    store.subscribe( () => {
      console.log('-----subscribe', store.getState())
      this.setState({
         counter: store.getState().counterReducer,
      })
    })
  }

  render(){
    const { step } = this.state
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
                step: step
              })
          }}
        />
        <Button 
          title="DECREMENT"
          onPress={ () => store.dispatch({
            type: 'DEC',
            step: step
          }) }
        />
      </View>
    )
  }
}

export default Counter