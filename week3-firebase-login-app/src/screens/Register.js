import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { theme } from '../config/colors'
import Logo from '../components/Logo'
// Importing components from react-native library.
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";
import { auth } from '../../firebase-config'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.info('Registered with:', user.email);
        navigation.navigate("Login");
      })
      .catch(error => console.error(error.message))
  }

  return (
    // Using react-natives built in components.
    <SafeAreaView>
        <View style={styles.container}>
            <Logo/>
            <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={text => setEmail(text)}
                  style={styles.input}
            />
            <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  style={styles.input}
                  secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.row}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login', { name: 'Login' })}>
                  <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    alignItems: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    width: '60%',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonText: {
    color: theme.colors.lightText,
    fontWeight: '700',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: "center"
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default Register;

