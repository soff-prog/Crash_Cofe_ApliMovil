import React, { useState } from 'react';
import { Alert, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { stylesGlobal } from '../theme/appTheme';
import { User } from '../navigator/StackNavigator';

interface FormRegister {
  nombre: string;
  correo: string;
  usuario: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  listUsers: User[];
  handleAddUser: (user: User) => void;
}

export const RegistroScreens = ({ listUsers, handleAddUser }: Props) => {
  const [formRegister, setFormRegister] = useState<FormRegister>({
    nombre: '',
    correo: '',
    usuario: '',
    password: '',
    confirmPassword: ''
  });

  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenConfirm, setHiddenConfirm] = useState(true);
  const navigation = useNavigation();

  const handleChangeValue = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
  }

  const handleRegister = () => {
    if(Object.values(formRegister).some(v => v === '')){
      Alert.alert('Error','Por favor complete todos los campos');
      return;
    }
    if(formRegister.password !== formRegister.confirmPassword){
      Alert.alert('Error','Las contraseñas no coinciden');
      return;
    }

    const newUser: User = {
      id: listUsers.length + 1,
      name: formRegister.nombre,
      email: formRegister.correo,
      user: formRegister.usuario,
      password: formRegister.password
    }
    handleAddUser(newUser);
    Alert.alert('Éxito','Usuario registrado correctamente');
    navigation.dispatch(CommonActions.navigate({ name: 'Inicio' }));
  }

  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#E9C7C0" />
      <Text style={stylesGlobal.title}>Registro</Text>

      <Text style={stylesGlobal.label}>Nombre completo</Text>
      <TextInput
        style={stylesGlobal.input}
        value={formRegister.nombre}
        onChangeText={value => handleChangeValue('nombre', value)}
        placeholder='Ejem: Juan Perez'
        keyboardType='default'
      />

      <Text style={stylesGlobal.label}>Correo electrónico</Text>
      <TextInput
        style={stylesGlobal.input}
        value={formRegister.correo}
        onChangeText={value => handleChangeValue('correo', value)}
        placeholder='Ejem: juanperez@gmail.com'
        keyboardType='email-address'
      />

      <Text style={stylesGlobal.label}>Usuario</Text>
      <TextInput
        style={stylesGlobal.input}
        value={formRegister.usuario}
        onChangeText={value => handleChangeValue('usuario', value)}
        placeholder='Ejem: juanperez'
        keyboardType='default'
      />

      <Text style={stylesGlobal.label}>Contraseña</Text>
      <View style={{ position: 'relative', width: '80%' }}>
        <TextInput
          style={stylesGlobal.input}
          value={formRegister.password}
          onChangeText={value => handleChangeValue('password', value)}
          placeholder='Ingrese una contraseña'
          secureTextEntry={hiddenPassword}
          keyboardType='numeric'
        />
        <Icon
          name={hiddenPassword ? 'visibility' : 'visibility-off'}
          size={20}
          color="#451D1C"
          style={{ position: 'absolute', right: 10, top: 12 }}
          onPress={() => setHiddenPassword(!hiddenPassword)}
        />
      </View>

      <Text style={stylesGlobal.label}>Confirmar contraseña</Text>
      <View style={{ position: 'relative', width: '80%' }}>
        <TextInput
          style={stylesGlobal.input}
          value={formRegister.confirmPassword}
          onChangeText={value => handleChangeValue('confirmPassword', value)}
          placeholder='Confirme su contraseña'
          secureTextEntry={hiddenConfirm}
          keyboardType='numeric'
        />
        <Icon
          name={hiddenConfirm ? 'visibility' : 'visibility-off'}
          size={20}
          color="#451D1C"
          style={{ position: 'absolute', right: 10, top: 12 }}
          onPress={() => setHiddenConfirm(!hiddenConfirm)}
        />
      </View>

      <TouchableOpacity style={stylesGlobal.button} onPress={handleRegister}>
        <Text style={stylesGlobal.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  )
}