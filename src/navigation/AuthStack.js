import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Inicio from '../screens/Inicio';
import Login from '../screens/Login';
import Registrarse from '../screens/Registrarse';
import VerRegistros  from '../screens/VerRegistros';
import CrearRegistro from '../screens/CrearRegistro';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={Inicio} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registrarse" component={Registrarse} />
      <Stack.Screen name="VerRegistros" component={VerRegistros} />
      <Stack.Screen name="CrearRegistro" component={CrearRegistro} />
    </Stack.Navigator>
  );
}
