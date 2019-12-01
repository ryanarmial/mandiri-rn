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
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from './containers/Home'
import About from './containers/About'
import AboutCompany from './containers/AboutCompany'
import ListPeople from './containers/ListPeople'
import Detail from './containers/Detail'
import Login from './containers/Login'

const aboutStackNav = createStackNavigator({
  About,
  AboutCompany
})

const peopleStackNav = createStackNavigator({
  ListPeople,
  Detail
})

const homeStackNav = createStackNavigator({
  Home,
  Detail
})

const mainNavigator = createBottomTabNavigator({
  Home: {
    screen: homeStackNav,
    navigationOptions: function(){
      return {
        title: 'Rumah'
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
  peopleStackNav
}, {
  initialRouteName: 'Home',
  navigationOptions: () => ({
    // headerShown: false
  })
})

const rootNavigator = createSwitchNavigator({
  Login,
  mainNavigator
})


export default createAppContainer(rootNavigator)
