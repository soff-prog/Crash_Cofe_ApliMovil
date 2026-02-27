import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PrincipalScreens } from '../screens/PrincipalScreens';
import { InicioScreens } from '../screens/InicioScreens';
import { RegistroScreens } from '../screens/RegistroScreens';
import { ProductosScreen } from '../screens/ProductosScreen/ProductosScreens';

const Stack = createStackNavigator();

export interface User {
  id: number;
  name: string;
  email: string;
  user: string;
  password: string;
}

export const StackNavigator = () => {

  const users: User[] = [
    { id: 1, name: 'Viviana Flores', email: 'vflores@gmail.com', user: 'vivi', password: '1234' },
    { id: 2, name: 'Carlos Aguas', email: 'caguas@gmail.com', user: 'carlos', password: '5678' }
  ];

  const [listUsers, setListUsers] = useState<User[]>(users);

  const handleAddUser = (user: User) => {
    setListUsers([...listUsers, user]);
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 4
        }
      }}
    >
      <Stack.Screen
        name="Principal"
        component={PrincipalScreens}
        options={{ title: 'Crash Café' }}
      />
      <Stack.Screen
        name="Inicio"
        options={{ title: 'Iniciar Sesión' }}
        children={() => <InicioScreens users={listUsers} />}
      />
      <Stack.Screen
        name="Registro"
        options={{ title: 'Registro' }}
        children={() => <RegistroScreens listUsers={listUsers} handleAddUser={handleAddUser} />}
      />
      <Stack.Screen
        name="Productos"
        options={{ title: 'Productos' }}
        children={() => <ProductosScreen />}
      />
    </Stack.Navigator>
  )
}