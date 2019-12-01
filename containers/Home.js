import React from 'react'
// jangan lupa install native-base
// npm install native-base --save
// karna beberapa component menggunakan expo font jadi kita harus install expo font caranya:
// expo install expo-font
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Segment, Button } from 'native-base';
import { FlatList } from 'react-native'

import listPeople from '../utils/data.json'


export default class Home extends React.Component {

  state = {
    people: [],
    peopleShow: [],
    gender: 'All'
  }

  componentDidMount() {
    this.setState({
      people: listPeople,
      peopleShow: listPeople
    })
  }

  changeGender(status) {
    if(status == "All") {
      var newPeople = this.state.people
    } else {
      var newPeople = this.state.people.filter(person => {
        return person.gender == status
      })
    }

    this.setState({
      gender: status,
      peopleShow: newPeople
    })
  }

  render() {
    const { gender } = this.state
    return (
      <Container>
        <Segment>
          <Button
            first
            onPress={() => this.changeGender('All')}
            active={(gender == "All") ? true : false }
          >
            <Text>All</Text>
          </Button>
          <Button
            onPress={() => this.changeGender('male')}
            active={(gender == "male") ? true : false}>
            <Text>Male</Text>
          </Button>
          <Button
            last
            onPress={() => this.changeGender('female')}
            active={(gender == "female") ? true : false}>
            <Text>Female</Text>
          </Button>
        </Segment>
        <Content>
          <List>
            <FlatList
              data={this.state.peopleShow}
              renderItem={({item,index}) => (
                <ListItem
                  onPress={() => this.props.navigation.navigate('Detail', {idPerson: index})}
                  avatar>
                  <Left>
                    <Thumbnail source={{ uri: item.picture }} />
                  </Left>
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note>{item.email}</Text>
                  </Body>
                  <Right>
                    <Text note>{item.gender}</Text>
                  </Right>
                </ListItem>
              )}
            />
          </List>
        </Content>
      </Container>
    );
  }
}
