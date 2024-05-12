import React from 'react'
import { View, Text ,TextInput, ScrollView, StyleSheet} from 'react-native-web'

const CreateUser = () => {
  return (
    <ScrollView>
      <View>
        <TextInput placeholder="Name User"/>
      </View>
      <View>
        <TextInput placeholder="Email User"/>
      </View>
      <View>
        <TextInput placeholder="Name User"/>
      </View>
    </ScrollView>
  )
}

export default CreateUser