import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { theme } from '../config/colors'
import Logo from '../components/Logo'
// Importing components from react-native library.
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";
import { auth } from '../../firebase-config'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.info('Logged in with:', user.email);
        navigation.navigate("Main");
      })
      .catch(error => console.error(error.message))
  }

  return (
    // Using react-natives built in components.
    <SafeAreaView style={styles.container}>
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
        <View style={styles.row}>
          <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('ResetPassword', { name: 'ResetPassword' }) }>
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register', { name: 'Register' })}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
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
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: "center"
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    width: '60%',
    padding: 15,
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
});

export default Login;