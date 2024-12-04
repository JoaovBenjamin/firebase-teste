import { initializeApp } from 'firebase/app';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { firebaseConfig } from '../service/firebaseConfig';
import { child, getDatabase, push, ref, set } from 'firebase/database';

export default function CreatePostScreen() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const appFirebase = initializeApp(firebaseConfig)
  const db = getDatabase(appFirebase);

  const handleCreatePost = async () => {
    if(title !== '' && body !==''){
        const newPostKey = push(child(ref(db), 'posts')).key
        const newPost = ref(db, 'posts/' + newPostKey)
        const PostsData = {
            title,
            body
        }
        await set(newPost, PostsData)
        console.log("sucesso")
    }else{
        console.log("erro")
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Post</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Corpo"
        value={body}
        onChangeText={setBody}
        multiline
        numberOfLines={4}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleCreatePost}>
        <Text style={styles.buttonText}>Criar</Text>
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
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Alinha o texto na parte superior do campo de texto
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
