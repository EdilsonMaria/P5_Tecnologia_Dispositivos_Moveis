import { View, Text } from 'react-native'
import React from 'react'

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text style={{fontSize: 28, fontWeight: 'bold', marginBottom: 10}}>👤 Meu Perfil</Text>
      <Text>Nome: Edilson Maria</Text>
      <Text>Email: edilson@gmail.com</Text>
      <button title='Sair' onPress={() => navigation.replace}></button>
    </View>
  )
}

export default ProfileScreen