import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { stylesGlobal } from '../theme/appTheme';

export const PrincipalScreens = () => {

  const navigation = useNavigation();

  return (
    <View style={stylesGlobal.container}>

        <View style={styles.logoContainer}>
            <Image 
                source={require('../../images/logoCrash.png')}
                style={styles.logoImage}
                resizeMode="contain"
            />
        </View>

        <View style={styles.buttonsContainer}>
            <TouchableOpacity
                style={stylesGlobal.button}
                onPress={() =>
                  navigation.dispatch(CommonActions.navigate({ name: 'Inicio' }))
                }>
                <Text style={stylesGlobal.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={stylesGlobal.button}
                onPress={() =>
                  navigation.dispatch(CommonActions.navigate({ name: 'Registro' }))
                }>
                <Text style={stylesGlobal.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    logoContainer:{
        alignItems:'center',
        marginTop: 30
    },
    logoImage:{
        width: 250,
        height: 250,
        marginBottom: 20
    },
    buttonsContainer:{
        alignItems:'center',
        marginTop: 40,
        marginBottom: 40
    }
});