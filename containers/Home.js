import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import Title from '../components/Title'
import List from '../components/List'

const Home = () => {
  const [word, setWord] = useState('Digimaster')
  const [todos, setTodos] = useState([
    'Bangun',
    'Tidur',
    'Makan'
  ])
  const [newTodo, setNewTodo] = useState('')

  function pencet() {
    setWord('Mandiri')
  }

  function changeText(text) {
    setNewTodo(text)
  }
  function addTodo() {
    console.log(newTodo)
    // alert(newTodo)
    if (newTodo != '') {
      setTodos(todos.concat(newTodo))
      setNewTodo('')
    }
  }

  return (
    <View style={styles.container}>
      <Title data={word} kata="berkait" />
      <List data={todos}/>
      <TextInput
        style={{ width: '50%', borderColor: 'red', borderWidth: 1 }}
        value={newTodo}
        onChangeText={changeText}
      />
      <Button
        title="Add Todo"
        color="green"
        onPress={addTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 2,
    backgroundColor: '#fff'
  },
  list2: {
    flex: 5,
    backgroundColor: '#000'
  },
  red: {
    color: 'red',
    backgroundColor: 'yellow',
    width: '75%'
  },
  blue: {
    color: 'blue',
    backgroundColor: 'purple',
    width: '50%'
  }
});

export default Home;
