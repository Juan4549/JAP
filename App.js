import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInPage from './src/pages/LogIn';
import HomePage from "./src/pages/Home";
import RegisterPage from "./src/pages/Register";
import { AuthContext, AuthProvider } from "./src/context/auth";
import ChatsComponent from "./src/components/Chats";
import MatchComponent from "./src/components/Matchs";
import Perfil from "./src/components/Perfil";
import ChatComponent from "./src/components/Chat";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "./src/database/firebase";
import { ActivityIndicator, View } from "react-native";
import { async } from "@firebase/util";
const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LogInPage} />
      <Stack.Screen name="Registro" component={RegisterPage} />
    </Stack.Navigator>
  );
}
function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Conoce a tu alma gemela 😉" component={HomePage} />
      <Stack.Screen name="Match" component={MatchComponent} />
      <Stack.Screen name="Chats" component={ChatsComponent} />
      <Stack.Screen name="Chat" component={ChatComponent} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}
function RootNavigator() {
  const [user, setUser] = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      getAuth(firebase.app),
      async (authenticatedUser) => {
        authenticatedUser ?
          async (authenticatedUser) => {
            console.log("Estoy aquí");
            const q = query(collection(firebase.db, "Perfiles"), where("uid", "==", user.uid));
            const querySnapshot = await getDocs(q);
            var data = {};
            //console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
              //console.log(doc.data());
              data = doc.data()
              console.log('Obtencion de datos del usuario');
            });
            console.log(data)
            console.log("Obtencion de matchs")
            var matchs = await getMatch(data.genero)
            console.log("Guardado de datos")
            setU({ ...user, auth: authenticatedUser, user: data, matchs: matchs });
          } : setUser({ ...user, auth: null });
        setIsLoading(false);
      }
    );
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user.auth]);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user.auth ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
