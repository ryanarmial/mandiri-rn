import React from 'react'
import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native'
import { connect } from 'react-redux'
import LottieView from "lottie-react-native";

import doneAnimation from '../utils/done-animation.json'

class Counter extends React.Component{
  constructor(props){
    super()
    this.state = {
      step: 1,
      displayAnimation: false
    }
  }

  componentDidMount() {
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  display(){
    this.setState({ displayAnimation: true}, () => {
      this.animation.play()
    })
    
  }

  render(){
    const { step } = this.state
    return (
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 75 }}> Counter</Text>
        <Text style={{ fontSize: 75 }}> {this.props.penghitung}</Text>
        <TextInput
          style={{ borderWidth: 1, height: 30 }}
          onChangeText={text => {
            this.setState({ step: Number(text) })
          }}
        />

        {this.state.displayAnimation && (
          <LottieView
            ref={animation => {
              this.animation = animation
            }}
            style={{
              alignSelf: "center",
              width: 100,
              height: 100,
              backgroundColor: "#eee",
            }}
            source={doneAnimation}
          />
        )}

        <Button title="INCREMENT" onPress={() => this.props.naikan(step)} />
        <Button title="DECREMENT" onPress={() => this.props.turunkan(step)} />
        <Button
          title="DISPLAY ANIMATION"
          onPress={() => this.display() }
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