import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import Title from '../components/Title'
import List from '../components/List'
import Tombol from '../components/Tombol'

const Home = (props) => {
  const [word, setWord] = useState('Digimaster')
  const [todos, setTodos] = useState([
    'Bangun',
    'Tidur',
    'Makan'
  ])
  const [ barang, setBarang ] = useState([
    10000,
    20000,
    30000
  ])
  const [ total, setTotal ] = useState(0)
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    console.log('saya hanya jalan satu kali')
  }, [])

  useEffect(() => {
    console.log('hanya jalan ketika state newTodo berubah dan todos berubah')
  }, [newTodo, todos])

  useEffect(() => {
    let hitung = 0
    for(var i = 0; i<barang.length; i++){
      hitung += barang[i]
    }
    console.log(hitung)
    setTotal(hitung)
  }, [barang])

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
      setBarang(barang.concat(Number(newTodo)))
      setNewTodo('')
    }
  }

  return (
    <View style={styles.container}>
      <Title data={word} kata="berkait" />
      <List data={barang}/>
      <Text>Total harga barang adalah {total}</Text>
      <TextInput
        style={{ width: '50%', borderColor: 'red', borderWidth: 1 }}
        value={newTodo}
        onChangeText={changeText}
      />
      <Tombol click={addTodo}/>
      <Button
        title="Pindah ke About"
        onPress={() => props.navigation.navigate('About')}
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
