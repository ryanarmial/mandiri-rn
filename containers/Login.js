import React from 'react'
import { Container, Content, Button, Text } from 'native-base'

export default class Login extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <Button onPress={() => this.props.navigation.navigate('mainNavigator')}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    )
  }

}
