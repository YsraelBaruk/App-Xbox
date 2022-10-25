import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

import TelaConsoles from './components/TelaConsoles';
import TelaInicial from './components/TelaInicial';
import TelaJogos from './components/TelaJogos';
import TelaConsoles from './components/TelaConsoles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigatioContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial}/>
        <Stack.Screen name="Console" component={TelaConsoles}/>
        <Stack.Screen name="Jogos" component={TelaJogos}/>
        <Stack.Screen name="Nuvem" component={TelaNuvem}/>
      </Stack.Navigator>
    </NavigatioContainer>
  )
};