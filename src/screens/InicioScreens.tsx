import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { stylesGlobal } from '../theme/appTheme';

interface FormLogin{
  email: string;
  password: string;
}

export const InicioScreens = () => {

  const navigation = useNavigation();

  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '',
    password: ''
  });

  //funcion para capturar los valores del formulario
  const handleChangeValue = (name: string, value: string): void =>{
    setFormLogin({...formLogin, [name]: value});
  }

  //funcion para iniciar sesion
  const handleSingIn = (): void => {
    console.log(formLogin);
    navigation.dispatch(
      CommonActions.navigate({ name: 'Principal' })
    );
  };

  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Iniciar Sesión</Text>

        <Text style={stylesGlobal.label}>Nombre de usuario</Text>
        <TextInput
            style={stylesGlobal.input}
            value={formLogin.email}
            onChangeText={(value)=>handleChangeValue('email', value)}
            autoCapitalize="none"/>

        <Text style={stylesGlobal.label}>Contraseña</Text>
        <TextInput
            style={stylesGlobal.input}
            value={formLogin.password}
            onChangeText={(value)=>handleChangeValue('password', value)}
            secureTextEntry/>

        <Button 
            title="Ingresar"
            onPress={handleSingIn}
            color="#451D1C"
        />
    </View>
  )
}