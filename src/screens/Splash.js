import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.replace('Welcome'), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Finance+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5C9FB0' },
  text: { fontSize: 30, color: '#fff', fontWeight: 'bold' },
});
