import React from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import { Button, Chip, HelperText, Switch, Text, TextInput } from "react-native-paper";
import { useRegister } from "../hooks/useRegister";
import backgroundM from "../../assets/backRegisterM.jpg"
import backgroundW from "../../assets/backRegisterW.jpg"
import { styles } from "../styles";

const RegisterPage = (props) => {
    const {
        form,
        errorsForm,
        loading,
        stateChip,
        handleChange,
        handleSubmit,
        setPreferences,
        setGn,
    } = useRegister({
        email: '',
        password: '',
        genero: false,
        names: '',
        surnames: '',
        preferences: '',
        age: '',
        description: '',
    });
    return (
        <View style={styles.container}>
            <ImageBackground source={form.genero ? backgroundW : backgroundM} resizeMode={'cover'} style={styles.image}>
                <ScrollView>
                    <TextInput
                        label="Email"
                        value={form.email}
                        onChange={(e) => handleChange(e, 'email')}
                    />
                    <HelperText
                        type="error"
                        visible={errorsForm.email && true}
                    >
                        {errorsForm.email}
                    </HelperText>
                    <TextInput
                        label="Contraseña"
                        value={form.password}
                        onChange={(e) => handleChange(e, 'password')}
                    />
                    <HelperText
                        type="error"
                        visible={errorsForm.password && true}
                    >
                        {errorsForm.password}
                    </HelperText>
                    <Text
                        variant="displaySmall">Eres {form.genero ? "Mujer" : "Hombre"}</Text>
                    <Switch
                        onValueChange={() => setGn()}
                        value={form.genero}
                    />
                    <TextInput
                        label="Nombres"
                        value={form.names}
                        onChange={(e) => handleChange(e, 'names')}
                    />
                    <HelperText
                        type="error"
                        visible={errorsForm.names && true}
                    >
                        {errorsForm.names}
                    </HelperText>
                    <TextInput
                        label="Apellidos"
                        value={form.surnames}
                        onChange={(e) => handleChange(e, 'surnames')}
                    />
                    <HelperText
                        type="error"
                        visible={errorsForm.surname && true}
                    >
                        {errorsForm.surname}
                    </HelperText>
                    <Text
                        variant="displaySmall"
                    >Intereses Otakus</Text>
                    <Chip
                        mode={stateChip.Anime ? "flat" : "outlined"}
                        icon="check"
                        onPress={() => setPreferences("Anime")}
                    >Anime</Chip>
                    <Chip
                        mode={stateChip.Manga ? "flat" : "outlined"}
                        icon="check"
                        onPress={() => setPreferences("Manga")}
                    >Manga</Chip>
                    <TextInput
                        label="Descripcion"
                        value={form.description}
                        onChange={(e) => handleChange(e, 'description')}
                    />
                    <HelperText
                        type="error"
                        visible={errorsForm.description && true}
                    >
                        {errorsForm.description}
                    </HelperText>
                    <TextInput
                        label="Edad"
                        value={form.age}
                        onChange={(e) => handleChange(e, 'age')}
                    />
                    <HelperText
                        type="error"
                        visible={errorsForm.age && true}
                    >
                        {errorsForm.age}
                    </HelperText>
                    <Button
                        icon="login"
                        mode="contained"
                        loading={loading}
                        disabled={Object.keys(errorsForm).length !== 0}
                        onPress={handleSubmit}>Crear Cuenta</Button>
                </ScrollView>
            </ImageBackground>
        </View>
    )
};

export default RegisterPage