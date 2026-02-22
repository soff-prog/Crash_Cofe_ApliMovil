import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { stylesGlobal } from '../theme/appTheme';

export const InicioScreens = () => {

  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  });

  const handleChangeValue = (name: string, value: string) => {
    setFormLogin({ ...formLogin, [name]: value });
  }

  const handleSignIn = () => {
    console.log(formLogin);
  }

  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Iniciar Sesión</Text>

        <Text style={stylesGlobal.label}>Nombre de usuario</Text>
        <TextInput
            style={stylesGlobal.input}
            value={formLogin.email}
            onChangeText={(value) => handleChangeValue('email', value)}
            autoCapitalize="none"/>

        <Text style={stylesGlobal.label}>Contraseña</Text>
        <TextInput
            style={stylesGlobal.input}
            value={formLogin.password}
            onChangeText={(value) => handleChangeValue('password', value)}
            secureTextEntry/>

        <Button 
            title="Ingresar"
            onPress={handleSignIn}
            color="#451D1C"
        />
    </View>
  )
}