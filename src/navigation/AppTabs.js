import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VerRegistros from '../screens/VerRegistros';
import Calendario from '../screens/Calendario';
import Estadisticas from '../screens/Estadisticas';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="VerRegistros" component={VerRegistros} />
      <Tab.Screen name="Calendario" component={Calendario} />
      <Tab.Screen name="Estadísticas" component={Estadisticas} />
    </Tab.Navigator>
  );
}
