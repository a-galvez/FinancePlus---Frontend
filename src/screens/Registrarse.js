import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function Registrarse() {
  const { login } = useAuth(); 

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Regístrate</Text>
        <TextInput style={styles.input} placeholder="Nombre" />
        <TextInput style={styles.input} placeholder="Correo" />
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={() => navigation.navigate('VerRegistros')}>Regístrate</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#629fad',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: 250,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2e4561',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
