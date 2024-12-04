import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { initializeApp } from 'firebase/app';
import {useNavigation} from "@react-navigation/native"
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { firebaseConfig } from '../service/firebaseConfig';



export default function Recuperar() {
    const [email,setEmail] = useState();
    const navigation = useNavigation();
    const appFirebase = initializeApp(firebaseConfig);
    const auth = getAuth(appFirebase);


    const handleRecuperar = async () => {
        if(email !== ""){
            try{
                await sendPasswordResetEmail(auth,email)
                navigation.canGoBack();
                console.log("sucesso")
            }catch{
                console.log("erro")
            }
        }
      };
    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleRecuperar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
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
