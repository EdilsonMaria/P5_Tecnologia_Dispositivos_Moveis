import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getCursos } from '../services/CursoService'

const HomeScreen = ({ navigation }) => {

  const [itens, setitens] = useState([])

  const carregarCursos = async () => {
    const cursos = await getCursos()
    setitens(cursos)
  }

  useFocusEffect(
    useCallback(() => {
      carregarCursos()
    }, [])
  )

    /*const itens = [
        { id: '1', name: 'Curso de React Native', description: 'Aprenda a criar apps para IOS e Android' },
        { id: '2', name: 'Curso de Java Spring Boot', description: 'Construar apis robusta com Java Sprinc' },
        { id: '3', name: 'Curso de AWS', description: 'Domine os serviço da AWS e obtenha certificação' },
        { id: '4', name: 'Curso de Python para Daya Science', description: 'Analise dados com Pyhton e Pandas' }
    ]*/

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Cursos Disponíveis</Text>
      <FlatList
        data = {itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
             style={styles.itemContainer}
             onPress={() => navigation.navigate('Datails', {
              itemId: item.id,
              name: item.name,
              description: item.description
             })}
            >
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </TouchableOpacity>
        )
        
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    itemContainer: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
    itemTitle: { fontSize: 18, fontWeight: 'bold' },
    itemDescription: { fontSize: 14, color: '#555' },
})

export default HomeScreen