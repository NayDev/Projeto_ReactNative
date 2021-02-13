import { StyleSheet, Platform } from 'react-native';


const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC0CB'
    },
    titulo: {
        color: "white",
        fontSize: 32,
        textAlign: 'center',
        marginTop:50
        
    },
    slogan: {
        color: "black",
        fontSize: 20,
        textAlign: 'center',
        marginTop:50
    },
    produtos: {
        width: "80%",
        height: "30%",
        marginTop: 30,
        padding: 10,
        borderRadius: 10,
        marginTop:50,
        marginLeft:35,
        marginRight:30,
    },
    btn:{
        backgroundColor: "#00BFFF",
        marginTop: 100,
        padding: 10,
        borderRadius: 4,
        width: 200,
        height:50
        
    },
    texto:{
        fontSize: 18,
        color: "white",
        textAlign: 'center'
    }
  
 
})

export default styles;