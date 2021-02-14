import { StyleSheet,Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === "web" ? "100vh" : "100%",
        width: "100%",
        backgroundColor: '#FFC0CB'
    },
    titulo: {
        color: "white",
        fontSize: 32,
        textAlign: 'center',
        marginTop: 30
    },
    btn:{
        backgroundColor: "#00BFFF",
        marginTop: 12,
        padding: 10,
        borderRadius: 4,
        marginLeft:50,
        marginRight:50,
        
    },
    texto:{
        fontSize: 20,
        color: "white",
        textAlign: 'center'
    },
    produtos: {
       marginTop:20,
       padding:20
    }

})

export default styles;