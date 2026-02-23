import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { stylesGlobal } from '../theme/appTheme';

interface FormLogin{
  nombre: string;
  correo: string;
  usuario: string;
  password: string;
  confirmPassword: string;
}

export const RegistroScreens = () => {

    const navigation = useNavigation();

    const [formLogin, setFormLogin] = useState<FormLogin>({
        nombre: '',
        correo: '',
        usuario: '',
        password: '',
        confirmPassword: ''
    });

    //funcion para capturar los valores del formulario
    const handleChangeValue = (name: string, value: string): void =>{
        setFormLogin({...formLogin, [name]: value});
    }

    const registrar = () => {
        console.log('REGISTRO');
        console.log('Nombre:', formLogin.nombre);
        console.log('Correo:', formLogin.correo);
        console.log('Usuario:', formLogin.usuario);
        console.log('Password:', formLogin.password);
        console.log('Confirm Password:', formLogin.confirmPassword);

        navigation.dispatch(
          CommonActions.navigate({ name: 'Inicio' })
        );
    };

return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Registro</Text>

        <Text style={stylesGlobal.label}>Nombre completo</Text>
        <TextInput
            style={stylesGlobal.input}
            value={formLogin.nombre}
            onChangeText={(value)=>handleChangeValue('nombre', value)}
            autoCapitalize="words"
            placeholder="ej: Juan Pérez"
        />

        <Text style={stylesGlobal.label}>Correo electrónico</Text>
        <TextInput
            style={stylesGlobal.input}
            value={formLogin.correo}
            onChangeText={(value)=>handleChangeValue('correo', value)}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="ej: juan@correo.com"
        />

        <Text style={stylesGlobal.label}>Nombre de usuario</Text>
        <TextInput
            style={stylesGlobal.input}
            value={formLogin.usuario}
            onChangeText={(value)=>handleChangeValue('usuario', value)}
            autoCapitalize="none"
            placeholder="ej: juan123"
        />

        <Text style={stylesGlobal.label}>Contraseña</Text>
        <TextInput
            style={stylesGlobal.input}
            value={formLogin.password}
            onChangeText={(value)=>handleChangeValue('password', value)}
            secureTextEntry
            placeholder="Ingrese su contraseña"
        />

        <Text style={stylesGlobal.label}>Confirmar contraseña</Text>
        <TextInput
            style={stylesGlobal.input}
            value={formLogin.confirmPassword}
            onChangeText={(value)=>handleChangeValue('confirmPassword', value)}
            secureTextEntry
            placeholder="Confirme su contraseña"
        />

        <Button 
            title="Iniciar Sesión"
            onPress={registrar}
            color="#451D1C"
        />
    </View>
  )
}