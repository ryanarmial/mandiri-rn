import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import peopleList from '../utils/data.json'

export default () => {
  const [people, setPeople] = useState(peopleList)
  console.log(people)
  return (
    <View style={styles.container}>
      <Text>Daftar Nama Orang</Text>
      <FlatList
        data={people}
        numColumns={3}
        horizontal={false}
        renderItem={({item}) => {
          return (
            <View style={{width: '33%'}}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
