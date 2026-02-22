import { StyleSheet } from "react-native";

export const stylesGlobal = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E9C7C0',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        fontSize: 28,
        fontWeight:'bold',
        marginBottom: 30,
        color: '#451D1C'
    },

    input:{
        width:'80%',
        backgroundColor:'#fff',
        padding:12,
        borderRadius:10,
        marginBottom:12
    },

    label:{
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginBottom: 4,
        color: '#451D1C',
        fontWeight: 'bold'
    },

    button:{
        backgroundColor: '#451D1C',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginVertical: 10
    },

    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }

});