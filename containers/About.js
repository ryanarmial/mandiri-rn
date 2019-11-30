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
    name: "Ryan"
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

  render() {
    const {word} = this.state
    return (
      <View style={styles.container}>
        <Judul text={`HALO SAYA DARI CLASS COMPONENT`} />
        <Text>Selamat Datang di {word}</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
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
