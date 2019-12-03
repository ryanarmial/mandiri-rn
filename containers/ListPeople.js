import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import peopleList from '../utils/data.json'
import axios from 'axios'

class ListPeople extends React.Component {

  state = {
    people: [],
    loading: false
  }

  async componentDidMount() {
    let url = "https://jsonplaceholder.typicode.com/users"
    this.setState({ loading: true})

    const resp = await axios.get(url)
    this.setState({
      people: resp.data,
      loading: false
    })    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Daftar Nama Orang</Text>
        { this.state.loading && <ActivityIndicator size="large" color="red" />}
        <FlatList
          data={this.state.people}
          numColumns={1}
          horizontal={false}
          style={styles.flatlist}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail',{
                  idPerson: index
                })}>
                <View style={styles.listItem}>
                  <View style={{ width: '30%' }}>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={{ uri: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" }}
                    />
                  </View>
                  <View style={{ width: '70%' }}>
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
