import React from 'react'
import { useNavigation } from '@react-navigation/core'
// Importing components from react-native library.
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../config/colors'
import { auth } from '../../firebase-config'

const Home = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    // Using react-natives built in components.
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Text>Dear: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: theme.colors.primary,
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: theme.colors.lightText,
    fontWeight: '700',
    fontSize: 16,
  },
})