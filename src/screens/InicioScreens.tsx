import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { stylesGlobal } from '../theme/appTheme';

export const InicioScreens = () => {

  const navigation = useNavigation();

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const ingresar = () => {
    console.log({ email: usuario, password: password});
    navigation.dispatch( CommonActions.navigate({ name: 'Principal' }));
  };

  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Iniciar Sesión</Text>

        <Text style={stylesGlobal.label}>Nombre de usuario</Text>
        <TextInput
            style={stylesGlobal.input}
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"/>

        <Text style={stylesGlobal.label}>Contraseña</Text>
        <TextInput
            style={stylesGlobal.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry/>

        <Button 
            title="Ingresar"
            onPress={ingresar}
            color="#451D1C"
        />
    </View>
  )
}