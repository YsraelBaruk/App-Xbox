import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

import TelaConsoles from './TelaConsoles/index';
import TelaInicial from './TelaInicial/index';
import TelaJogos from './TelaJogos/index';
import TelaConsoles from './TelaConsoles/index';

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
  );
}