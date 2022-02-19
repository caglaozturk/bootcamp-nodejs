import React from 'react'
// Importing components from react-native library.
import { Image, StyleSheet } from 'react-native'

// Function component tanımlandı
export default function Logo() {
  return <Image source={require('../assets/logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom : 10,
    marginLeft: "auto",
    marginRight: "auto"
  },
})
