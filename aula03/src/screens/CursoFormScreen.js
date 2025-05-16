import { View, Text, Alert, TextInput, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { adicionarCurso, atulaizarCurso } from '../services/CursoService'
import { db } from '../config/firebaseConfig'

const CursoFormScreen = ({ route, navigation }) => {

    const itemId = route.params?.itemId
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [editando, setEditando] = useState(false)

    useEffect(() => {
        if (itemId) {
            const buscarCurso = async () => {
                const docRef = doc(db, 'cursos', itemId)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists) {
                    setNome(docSnap.data().name)
                    setDescricao(docSnap.data().description)
                    setEditando(true)
                } 
            }
            buscarCurso()
        }
    }, [itemId])

    const handleSalvar = async () => {
      if ( !nome || !descricao ) {
        Alert.alert('Erro', 'Preencha todos os campos!')
        return
      }

      try {
        if (editando) {
          await atulaizarCurso(itemId, { name: nome, description: descricao})
          Alert.alert('Curso atualizado com sucesso!')
        } else {
          await adicionarCurso({ name: nome, description: descricao })
          Alert.alert('Curso criado com sucesso!') 
        }
        navigation.goBack()
      } catch (error) {
        Alert.alert('Erro', 'Algo deu errado ao salvar!')

      }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {editando ? 'Editar Curso' : 'Adicionar Curso'}
      </Text>

      <TextInput
        placeholder="Nome o curso"
        style={styles.input}
        value={nome}
        onChangeText={setNome}>
      </TextInput>
      <TextInput
        placeholder="Descrição o curso"
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}>
      </TextInput>

      <Button title={editando ? 'Salvar Alteração' : 'Criar Curso'} onPress={handleSalvar}></Button>
    </View>
  
  )
}

const styles = StyleSheet.create({
container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f5f5' },
title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
input: { borderBottomWidth: 1, marginBottom: 20, padding: 8 },
})

export default CursoFormScreen