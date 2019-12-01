import React from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import peopleList from '../utils/data.json'

class ListPeople extends React.Component {

  state = {
    people: []
  }

  componentDidMount() {
    this.setState({
      people: peopleList
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Daftar Nama Orang</Text>
        <FlatList
          data={this.state.people}
          numColumns={3}
          horizontal={false}
          renderItem={({ item }) => {
            return (
              <View style={{ width: '33%' }}>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
              </View>
            )
          }}
        />
      </View>
    )
  }

}

export default ListPeople

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
