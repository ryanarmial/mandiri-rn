import React from 'react'
import {Button} from 'react-native'

export default (props) => {
  return (
    <Button
      title="Add Todo"
      color="green"
      onPress={props.click}
    />
  )
}
