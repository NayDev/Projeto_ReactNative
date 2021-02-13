import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from './styles';

const produtos = [
    {
        nome: "Computador PC CPU Completo Intel Core i5 8Gb 2Tb Monitor 19 LED HDMI Kit BestPC ",
        preco: 1592
    },
    {
        nome: "Computador Completo Intel 7ª Geração 8GB HD 500GB (Placa de vídeo Intel UHD 610) Monitor 19.5",
        preco: 1926
    },
    {
        nome: "Computador Completo Intel 7ª Geração 8GB HD 500GB (Placa de vídeo Intel UHD 610) Monitor 19.5",
        preco: 2105
    },
    {
        nome: "Computador Completo Intel 7ª Geração 8GB HD 500GB (Placa de vídeo Intel UHD 610) Monitor 19.5",
        preco: 1926
    },
    {
        nome: "Computador Completo Intel 7ª Geração 8GB HD 500GB (Placa de vídeo Intel UHD 610) Monitor 19.5",
        preco: 2105
    },
    
  
    
]

function Produtos({navigation}) {
    function home() {
        navigation.navigate("Home");
}
    return (
        
        <View >
            <Text style={styles.titulo}>Produtos</Text>
          

            {
                
                produtos.map((produto, index) => 
                    
                    <Text style={styles.produtos} key={index}>
                        {produto.nome}
                        R$:{produto.preco}
                    </Text>
                    
                )
            }
 <TouchableOpacity style={styles.btn} onPress={home} >
                        <Text style={styles.texto}>Voltar</Text>
                    </TouchableOpacity>
        </View>
    )
}

export default Produtos;