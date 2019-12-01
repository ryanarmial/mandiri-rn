import React from 'react'
import { StyleSheet, View, Text, Button, TextInput} from 'react-native'

import Judul from '../components/Judul'

class About extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     word: "Digimaster"
  //   }
  // }
  state = {
    word: "Digimaster",
    name: "Ryan",
    colorBorder: 'blue'
  }
  ganti = (text) => {
    // console.log(this)
    this.setState({
      word: text
    })
  }
  gantiText = (event, text) => {
    this.setState({
      name: event
    })
  }
  componentDidUpdate() {
    if (this.state.name.length >= 5 && this.state.colorBorder != 'green') {
      this.setState({
        colorBorder: 'green'
      })
    }
  }
  componentDidMount() {
    // fetch api
    console.log('halo saya dari didmount')
  }

  render() {
    const {word} = this.state
    return (
      <View style={styles.container}>
        <Text>Saya text yang pertama {this.state.name}</Text>
        <Text>Saya text yang kedua {this.state.name}</Text>
        <TextInput
          style={{
            width: 100,
            borderColor: this.state.colorBorder,
            borderWidth: 1
          }}
          onChangeText={(e) => {
            return this.gantiText(e, 'keganti textnya')
          }}
        />
        <Button
          title="Ganti"
          onPress={() => {
            return this.ganti("Mandiri")
          }}
        />
        <Button
          title="Pindah ke List People"
          onPress={() => this.props.navigation.navigate('ListPeople')}
        />
        {/* Ini adalah contoh high order function sederhana */}
        {/* <Button
          title="Ganti"
          onPress={() => this.ganti("Mandiri")}
        /> */}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default About
