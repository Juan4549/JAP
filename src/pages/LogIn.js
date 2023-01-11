import React from "react";
import { View,Text, TextInput, StatusBar} from "react-native";
import { Button } from "react-native-paper";
import CircularProgress from "../components/CircularProgress";

export default function LogInPage() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>Inicia sesión con tu cuenta</Text>
            <TextInput placeholder="correo@algo.com" />
            <TextInput placeholder="ABC123" />
            <Button icon="login">
                Ingresar
            </Button>
            <CircularProgress/>
            <StatusBar style="auto" />
        </View>
    )
}