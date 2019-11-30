import React from 'react'
import {View, Text} from 'react-native'

class Judul extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     name: "Ryan Akbar"
  //   }
  // }
  state = {
    name: "Ryan Akbar"
  }
  render() {
    return (
      <View>
        <Text>
          {this.props.text +" "+ this.state.name}
        </Text>
      </View>

    )

  }

}

export default Judul
