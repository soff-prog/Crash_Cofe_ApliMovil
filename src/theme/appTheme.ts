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
    },

containerCard: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: '#fff',
    margin: 7,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3
},

titleCard: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
},

textPrice: {
    marginTop: 4,
    marginBottom: 8,  
    fontWeight: '500',
},

imageCard: {
    width: 80,
    height: 80,
    marginBottom: 5
},
    containerModal:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.4)',
    justifyContent:'center',
    alignItems:'center'
},

bodyModal:{
    width:'80%',
    backgroundColor:'#fff',
    borderRadius:15,
    padding:20,
    alignItems:'center'
},

headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},

titleModal:{
    fontSize:20,
    fontWeight:'bold',
    color:'#451D1C'
},

imageModal:{
    width:120,
    height:120,
    marginVertical:10
},

textStock:{
    fontSize:16,
    marginVertical:5
},

containerQuantity:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10
},

buttonQuantity:{
    backgroundColor:'#451D1C',
    width:35,
    height:35,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    marginHorizontal:10
},

buttonQuantityText:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold'
},

textTotalPrice:{
    fontSize:18,
    fontWeight:'bold',
    marginVertical:10
},

closeModalText:{
    textAlign: 'center', 
    color: '#451D1C', 
    fontWeight: 'bold'
},

textPay:{
    alignSelf:'flex-end', 
    fontWeight:'bold', 
    fontSize:16, 
    marginTop:10
},

iconCard: {
    padding: 2
},

headerTable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 4
},

headerTextTable: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#451D1C'
},

headerDescription: {
    flexDirection: 'row',
    alignItems: 'center'
},

containerTotalPay: {
    marginTop: 10,
    alignItems: 'flex-end'
},

textTotalPay: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#451D1C'
},

});