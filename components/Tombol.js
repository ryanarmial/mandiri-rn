import React from 'react'
import {Button} from 'react-native'

export default ({ label, click}) => {
  return (
    <Button
      title={label}
      color="green"
      onPress={click}
    />
  )
}
