import React, { useState } from 'react';
import { Alert, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { stylesGlobal } from '../theme/appTheme';
import { User } from '../navigator/StackNavigator';

interface FormLogin {
  usuario: string;
  password: string;
}

interface Props {
  users: User[];
}

export const InicioScreens = ({ users }: Props) => {
  const [formLogin, setFormLogin] = useState<FormLogin>({
    usuario: '',
    password: ''
  });

  const [hiddenPassword, setHiddenPassword] = useState(true);
  const navigation = useNavigation();

  const handleChangeValue = (name: string, value: string) => {
    setFormLogin({ ...formLogin, [name]: value });
  }

  const verifyUser = () => {
    return users.find(u => u.user === formLogin.usuario && u.password === formLogin.password);
  }

  const handleSingIn = () => {
    if(formLogin.usuario === '' || formLogin.password === ''){
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }

    if(!verifyUser()){
      Alert.alert('Error','Usuario y/o contraseña incorrectos');
      return;
    }

    navigation.dispatch(CommonActions.navigate({ name: 'Productos' }));
  }

  return (
    <View style={stylesGlobal.container}>
      <StatusBar backgroundColor="#E9C7C0" />
      <Text style={stylesGlobal.title}>Iniciar Sesión</Text>

      <Text style={stylesGlobal.label}>Usuario</Text>
      <TextInput
        style={stylesGlobal.input}
        value={formLogin.usuario}
        onChangeText={value => handleChangeValue('usuario', value)}
        placeholder='ejem: vivi'
        autoCapitalize="none"
      />

      <Text style={stylesGlobal.label}>Contraseña</Text>
      <View style={{ position: 'relative', width: '80%' }}>
        <TextInput
          style={stylesGlobal.input}
          value={formLogin.password}
          onChangeText={value => handleChangeValue('password', value)}
          placeholder='ejem: 123456'
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

      <TouchableOpacity style={stylesGlobal.button} onPress={handleSingIn}>
        <Text style={stylesGlobal.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  )
}