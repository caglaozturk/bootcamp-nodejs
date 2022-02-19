import React, { useState, useEffect } from 'react'
// Importing components from react-native library.
import { View, Text, StyleSheet, FlatList } from 'react-native'
import api from '../services/api'

const User = () => {
  const [datas, setDatas] = useState(false)

  const getData = async () => {
    await api.get('/todos').then(response => {
      setDatas(response.data)
      console.log(response.data)
    }).catch(error => {
      console.error(error)
    })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    // Using react-natives built in components.
    <View style={styles.container}>

      <FlatList 
        keyExtractor={(item) => item.id} 
        data={datas} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.title}</Text>
        )}
      />

    </View>
  );
}

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 10,
    backgroundColor: '#bec1c0',
    fontSize: 15,
    textTransform: 'capitalize'
  },
});