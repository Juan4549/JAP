import * as React from "react";
import { View } from "react-native";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import { validateEmail } from "../helpers/ValidationForms";

export default function LogInPage() {
    var [TIemail, setTIemail] = React.useState('');
    var [TIpassword, setTIpassword] = React.useState('');

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
                value={TIemail}
                onChangeText={TIemail =>setTIemail(TIemail)}
            />
            <HelperText
                type="error"
                visible={validateEmail(TIemail)}
            >
                {validateEmail(TIemail)}
            </HelperText>
            <TextInput
                label="Contraseña"
                value={TIpassword}
                onChangeText={TIpassword =>setTIpassword(TIpassword)}
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