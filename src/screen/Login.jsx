import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { initializeApp } from 'firebase/app';
import {useNavigation} from "@react-navigation/native"
import { getAuth, signInWithEmailAndPassword,} from 'firebase/auth';
import { firebaseConfig } from '../service/firebaseConfig';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const appFirebase = initializeApp(firebaseConfig);
  const auth = getAuth(appFirebase);
  


  const handleLogin = async () => {
    if (email !== '' && password !== '') {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate("Home")
        console.log('Usuário logado com sucesso:', userCredential.user);
      } catch (error) {
        console.error('Erro ao fazer login:', error.message);
      }
    } else {
      console.warn('Por favor, preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

     <TouchableOpacity style={styles.button} onPress={() => (navigation.navigate("Recuperar"))}>
        <Text style={styles.buttonText}>Esqueceu a senha</Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
