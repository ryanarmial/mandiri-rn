import React from 'react'
import { StyleSheet, View, Text, Button, TextInput} from 'react-native'

class About extends React.Component {
  state = {
    word: "Digimaster",
    name: "Ryan",
    colorBorder: 'blue'
  }

  render() {
    const {word} = this.state
    return (
      <View style={styles.container}>
        <Text>Saya Halaman About Personal</Text>
        <Button
          title="Pindah ke Company"
          onPress={() => this.props.navigation.navigate('AboutCompany')}
        />
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
