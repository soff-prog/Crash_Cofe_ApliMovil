import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { stylesGlobal } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const InicioScreens = ({navigation}: Props) => {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

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
            onPress={() => navigation.popToTop()}
            color="#451D1C"
        />
    </View>
  )
}
