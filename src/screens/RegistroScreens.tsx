import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { stylesGlobal } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const RegistroScreens = ({navigation}: Props) => {

    //usamos el useState para guardar los datos escritos por el cliente
    //hook useState: permite cambiar el estado de una variable, objeto
    const [nombre, setNombre] = useState<string>('');
    const [correo, setCorreo] = useState<string>('');
    const [usuario, setUsuario] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');


return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Registro</Text>

        <Text style={stylesGlobal.label}>Nombre completo</Text>
        <TextInput
            style={stylesGlobal.input}
            value={nombre}
            onChangeText={setNombre}
            autoCapitalize="words"
            placeholder="ej: Juan Pérez"
        />

        <Text style={stylesGlobal.label}>Correo electrónico</Text>
        <TextInput
            style={stylesGlobal.input}
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="ej: juan@correo.com"
        />

        <Text style={stylesGlobal.label}>Nombre de usuario</Text>
        <TextInput
            style={stylesGlobal.input}
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
            placeholder="ej: juan123"
        />

        <Text style={stylesGlobal.label}>Contraseña</Text>
        <TextInput
            style={stylesGlobal.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Ingrese su contraseña"
        />

        <Text style={stylesGlobal.label}>Confirmar contraseña</Text>
        <TextInput
            style={stylesGlobal.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholder="Confirme su contraseña"
        />

        <Button 
            title="Iniciar Sesión"
            onPress={() => navigation.navigate('Inicio')}
            color="#451D1C"
        />
    </View>
  )
}
