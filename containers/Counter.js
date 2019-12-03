import React from 'react'
import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native'
import { connect } from 'react-redux'


class Counter extends React.Component{
  constructor(props){
    super()
    this.state = {
      step: 1
    }
  }

  render(){
    const { step } = this.state
    return(
      <View style={{marginTop: 40}}>
        <Text style={{ fontSize: 75}}> Counter</Text>
        <Text style={{ fontSize: 75}}> { this.props.penghitung }</Text>
        <TextInput 
          style={{ borderWidth: 1, height: 30}}
          onChangeText={(text) => {
            this.setState({ step: Number(text)})
          }}
          />
        <Button 
          title="INCREMENT"
          onPress={ () => this.props.naikan(step) }
        />
        <Button 
          title="DECREMENT"
          onPress={ () => this.props.turunkan(step)  }
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  penghitung: state.counterReducer
})

const mapDispatchToProps = (dispatch) => {
  return {
    naikan: (langkah) => dispatch({
      type: 'INC',
      step: langkah
    }),
    turunkan: (langkah) => dispatch({
      type: 'DEC',
      step: langkah
    })
  }
}
 
const connectedCounter = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Counter)

export default connectedCounter

// redux way
// store.getState().counterReducer

// // react-redux  way
// this.props.penghitung

// this.props.dispatch({

// })