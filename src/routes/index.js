import React from 'react';
import { 
    createAppContainer, 
    createSwitchNavigator
} from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Produtos from '../screens/Produtos';

const Rotas = {
    Login: {
        nome: "Login",
        screen: Login
    },
    Home: {
        nome: "Home",
        screen: Home
    },
    Produtos: {
        nome: "Produtos",
        screen: Produtos
    }
}

// Criar as rotas
const Navegacao = createSwitchNavigator(Rotas);

// passar para o App
export default createAppContainer(Navegacao);