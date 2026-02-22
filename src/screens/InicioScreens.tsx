import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { stylesGlobal } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const InicioScreens = ({navigation}: Props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ingresar = () => {
    console.log({ email, password });
    navigation.popToTop();
  }

  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Iniciar Sesión</Text>

        <Text style={stylesGlobal.label}>Correo electrónico</Text>
        <TextInput
            style={stylesGlobal.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
        />

        <Text style={stylesGlobal.label}>Contraseña</Text>
        <TextInput
            style={stylesGlobal.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />

        <Button 
            title="Ingresar"
            onPress={ingresar}
            color="#451D1C"
        />
    </View>
  )
}