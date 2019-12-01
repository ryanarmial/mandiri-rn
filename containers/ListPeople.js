import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight
} from 'react-native'
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
          numColumns={1}
          horizontal={false}
          style={styles.flatlist}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate('Detail',{
                  idPerson: index
                })}>
                <View style={styles.listItem}>
                  <View style={{ width: '30%' }}>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={{ uri: item.picture }}
                    />
                  </View>
                  <View style={{ width: '70%' }}>
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                  </View>
                </View>
              </TouchableHighlight>
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
    width: '100%',
    paddingTop: 20
  },
  flatlist: {
    padding: 20,
    width: "100%"
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  }
});

// see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
