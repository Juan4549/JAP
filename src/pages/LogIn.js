import * as React from "react";
import { ImageBackground, View } from "react-native";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import background from "../../assets/backLogin.jpg"
import { AuthContext } from "../context/auth";
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

    const [u, setU] = React.useContext(AuthContext);
    const [statePassword, setStatePassword] = React.useState(true);
    return (
        <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.imageback} >

            <View style={styles.container}>
                {/* Nombre logo */}
                <Text
                    style={styles.text}
                >JAP
                </Text>
                {/* TextInput email */}
                <TextInput
                    style={styles.textInput}
                    label="Correo electrónica"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    value={form.email}
                    onChange={(e) => handleChange(e, 'email')}
                />
                <HelperText
                    style={styles.helpersText}
                    type="error"
                    visible={errorsForm.email && true}
                >
                    {errorsForm.email}
                </HelperText>
                {/* TextInput password */}
                <TextInput
                    style={styles.textInput}
                    label="Contraseña"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                    value={form.password}
                    right={<TextInput.Icon icon={statePassword ? "eye" : "eye-off"}
                        onPress={() => setStatePassword(!statePassword)} />}
                    secureTextEntry={statePassword}
                    onChange={(e) => handleChange(e, 'password')}
                />
                <HelperText
                    style={styles.helpersText}
                    type="error"
                    visible={errorsForm.password && true}
                >
                    {errorsForm.password}
                </HelperText>
                {/* Btn Login */}
                <Button
                    style={styles.button}
                    icon="login"
                    mode="contained"
                    loading={loading}
                    disabled={Object.keys(errorsForm).length !== 0 || loading}
                    onPress={() => {
                        handleSubmit(props)
                    }}>
                    Ingresar
                </Button>
                {/* Btn Register */}
                <Button
                    style={styles.button}
                    icon="account-plus"
                    mode="text"
                    onPress={() => props.navigation.navigate('Registro')}>
                    Eres nuev@? Registrate
                </Button>
            </View>
        </ImageBackground>
    )
}