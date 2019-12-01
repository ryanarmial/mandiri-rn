// sebelumnya install dulu:
// npm install --save react-navigation
// npm install --save react-native-gesture-handler
// harus install react-native-cli sebelum react-native link
// npm install -g react-native-cli
// react-native link react-native-gesture-handler
// npm install --save react-navigation-stack
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './containers/Home'
import About from './containers/About'
import ListPeople from './containers/ListPeople'

const stackNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  About,
  ListPeople
})

export default createAppContainer(stackNavigator)
