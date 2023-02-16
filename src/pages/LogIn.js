import * as React from "react";
import { View } from "react-native";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import { validateEmail } from "../helpers/ValidationForms";


export default function LogInPage() {
    var [dataUser, setDataUser] = React.useState({
        email: '',
        password: '',
    });
    const handleChangeText = (name, value) => {
        setDataUser({ ...dataUser, [name]: value })
    }
    return (
        <View>
            <Text
                variant="displayLarge"
            >
                Jap
            </Text>
            <Text
                variant="displaySmall"
            >
                Inicia sesión con tu cuenta
            </Text>
            <TextInput
                label="Correo electrónica"
                value={dataUser.email}
                onChangeText={handleChangeText('email',dataUser.email)}
            />
            <HelperText
                type="error"
                visible={validateEmail(dataUser.email)}
            >
                {validateEmail(dataUser.email)}
            </HelperText>
            <TextInput
                label="Contraseña"
                value={dataUser.password}
                onChangeText={handleChangeText('password', dataUser.password )}
            />
            <HelperText
                type="error"
                visible={false}
            >
                Usuario o Contraseña incorrecto!!!
            </HelperText>
            <Button
                icon="login"
                mode="contained"
                onPress={() => console.log('Ingeso a la app')}>
                Ingresar
            </Button>
            <Button
                icon="login"
                mode="text"
                onPress={() => console.log('Registro de la app')}>
                Eres nuev@? Registrate
            </Button>
        </View>
    )
}