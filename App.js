import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from "./src/theme";
import LogInPage from './src/pages/LogIn';
import HomePage from "./src/pages/Home";
import RegisterPage from "./src/pages/Register";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LogInPage} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Registro" component={RegisterPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
