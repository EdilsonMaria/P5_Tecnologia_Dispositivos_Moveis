import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Exercicio2 = () => {

    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador+1)
    }

    function decrementar() {
        setContador(contador-1)
    }

  return (
    <View style={styles.container}>
      <Button title="incrementar" onPress={incrementar}></Button>
      <Text>O contador esta em: {contador}</Text>
      <Button title="decrementar" onPress={decrementar}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItens: 'center',
        justifyContent: 'center',
        padding: 100
    }
})

export default Exercicio2