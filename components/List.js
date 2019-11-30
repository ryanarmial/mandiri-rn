import React from 'react'
import {View, Text} from 'react-native'

export default (props) => {
  return(
    <View>
      {
        props.data.map((todo, index) => {
          if(index%2 == 0) {
            return <Text key={index}>Halo {todo}</Text>
          } else {
            return <Text key={index}>{todo}</Text>
          }
        })
      }
    </View>
  )
}
