import * as React from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import { Wrap, VStack, Box, Divider } from "@react-native-material/core";
import background from "../../assets/backLogin.jpg"
import { useLogin } from "../hooks/useLogin";
import { styles } from "../styles";

export default function LogInPage(props) {
    const {
        form,
        errorsForm,
        loading,
        handleChange,
        handleSubmit,
    } = useLogin({
        email: '',
        password: '',
    });
    return (
            <View style={styles.container}>
                <ImageBackground source={background} resizeMode={'cover'} style={styles.image}>
                    {/* Nombre logo */}
                    <Box>
                        <Text
                            variant="displayLarge"
                        >Jap
                        </Text>
                    </Box>
                    {/* Inicio Sesion */}
                    <Box >
                        <Text
                            variant="displaySmall"
                        >Inicia sesión
                        </Text>
                    </Box>
                    {/* TextInput email */}
                    <Box >
                        <TextInput
                            label="Correo electrónica"
                            value={form.email}
                            onChange={(e) => handleChange(e, 'email')}
                        />
                        <HelperText
                            type="error"
                            visible={errorsForm.email && true}
                        >
                            {errorsForm.email}
                        </HelperText>
                    </Box>
                    {/* TextInput password */}
                    <Box>
                        <TextInput
                            label="Contraseña"
                            value={form.password}
                            secureTextEntry={true}
                            onChange={(e) => handleChange(e, 'password')}
                        />
                        <HelperText
                            type="error"
                            visible={errorsForm.password && true}
                        >
                            {errorsForm.password}
                        </HelperText>
                    </Box>
                    {/* Btn Login */}
                    <Box >
                        <Button
                            icon="login"
                            mode="contained"
                            loading={loading}
                            disabled={Object.keys(errorsForm).length !== 0}
                            onPress={() => handleSubmit(props)}>
                            Ingresar
                        </Button>
                    </Box>
                    {/* Btn Register */}
                    <Box >
                        <Button
                            icon="login"
                            mode="text"
                            onPress={() => props.navigation.navigate('Registro')}>
                            Eres nuev@? Registrate
                        </Button>
                    </Box>
                </ImageBackground>
            </View >
    )
}