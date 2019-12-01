import React from 'react'
import {View, Text} from 'react-native'

import listPeople from '../utils/data.json'

export default class Detail extends React.Component {
  state = {
    person: {}
  }
  componentDidMount() {
    let idPerson = this.props.navigation.state.params.idPerson
    this.setState({
      person: listPeople[idPerson]
    })
  }
  render() {
    return (
      <View>
        <Text>Saya dihalaman Detail</Text>
        <Text>{this.state.person.name}</Text>
      </View>
    )
  }

}
