// sebelumnya install dulu:
// npm install --save react-navigation
// npm install --save react-native-gesture-handler
// harus install react-native-cli sebelum react-native link
// npm install -g react-native-cli
// react-native link react-native-gesture-handler
// npm install --save react-navigation-stack
//
// untuk install bottom tab navigator
// npm install react-navigation-tabs
// npm i react-native-reanimated
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from './containers/Home'
import About from './containers/About'
import AboutCompany from './containers/AboutCompany'
import ListPeople from './containers/ListPeople'

const aboutStackNav = createStackNavigator({
  About,
  AboutCompany
})

const rootNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: function(){
      return {
        title: 'Selamat Datang di Home'
      }
    }
  },
  About: {
    screen: aboutStackNav,
    navigationOptions: () => ({
      title: "About Digimaster",
      headerShown: false
    })
  },
  ListPeople
}, {
  initialRouteName: 'Home',
  navigationOptions: () => ({
    // headerShown: false
  })
})

export default createAppContainer(rootNavigator)
