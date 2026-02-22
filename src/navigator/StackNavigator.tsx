import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PrincipalScreens } from '../screens/PrincipalScreens';
import { InicioScreens } from '../screens/InicioScreens';
import { RegistroScreens } from '../screens/RegistroScreens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          elevation: 4
        }
      }}>
        
      <Stack.Screen name="Principal" component={PrincipalScreens} options={{title: 'Crash Café'}}/>
      <Stack.Screen name="Inicio" component={InicioScreens} options={{title: 'Iniciar Sesión'}}/>
      <Stack.Screen name="Registro" component={RegistroScreens} options={{title: 'Registro'}}/>

    </Stack.Navigator>
  )
}