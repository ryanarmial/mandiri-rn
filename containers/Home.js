import React from 'react'
// jangan lupa install native-base
// npm install native-base --save
// karna beberapa component menggunakan expo font jadi kita harus install expo font caranya:
// expo install expo-font
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { FlatList } from 'react-native'

import listPeople from '../utils/data.json'


export default class Home extends React.Component {

  state = {
    people: []
  }

  componentDidMount() {
    this.setState({
      people: listPeople
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <FlatList
              data={this.state.people}
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
