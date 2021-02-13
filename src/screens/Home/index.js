import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

function Home({navigation}) {

    function produtos() {
            navigation.navigate("Produtos");
    }
    return (
        <View style={styles.caixa}>

        <Text style={styles.titulo}>Seja Bem Vindo(a)!!!</Text>
        <Text style={styles.slogan}>Venha conhecer nossos produtos...</Text>
        <Image style={styles.produtos} source={require('../../../assets/computadores.jpeg')} />
        <TouchableOpacity style={styles.btn} onPress={produtos} >
                        <Text style={styles.texto}>Veja Mais</Text>
                    </TouchableOpacity>
        </View>
    )
}

export default Home;