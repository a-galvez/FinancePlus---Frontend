import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function CrearRegistro() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crear registro</Text>
      <TextInput style={styles.input} placeholder="Tipo" />
      <TextInput style={styles.input} placeholder="Monto" />
      <TextInput style={styles.input} placeholder="Descripción (Opcional)" />
      <TextInput style={styles.input} placeholder="Fecha" />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#629fad',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  balanceBox: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  recordBox: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  addButton: {
    backgroundColor: '#2e4561',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
  input: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginVertical: 10,
  },
});
