import React from "react";
import { Image, ImageBackground, ScrollView, View } from "react-native";
import { Button, Chip, HelperText, IconButton, MD3Colors, Switch, Text, TextInput } from "react-native-paper";
import { useRegister } from "../hooks/useRegister";
import backgroundM from "../../assets/backRegisterM.jpg"
import backgroundW from "../../assets/backRegisterW.jpg"
import { styles } from "../styles";

const RegisterPage = (props) => {
    const {
        form,
        foto,
        errorsForm,
        loading,
        stateChip,
        handleChange,
        handleSubmit,
        setPreferences,
        setGn,
        selectImage,
    } = useRegister({
        email: '',
        password: '',
        foto: '',
        genero: false,
        names: '',
        surnames: '',
        preferences: '',
        age: '',
        description: '',
    });
    const [statePassword, setStatePassword] = React.useState(true);

    return (
        <ImageBackground
            source={form.genero ? backgroundW : backgroundM}
            resizeMode={'cover'}
            style={styles.imageback}>

            <ScrollView >
                <View
                    style={styles.container}>
                    {/* TextInput Email */}
                    <TextInput
                        style={styles.textInput}
                        label="Email"
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
                    {/* TextInput Password */}
                    <TextInput
                        style={styles.textInput}
                        label="Contraseña"
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
                    {/* Switch Genero */}
                    <View style={styles.containerSwitch}>
                        <Text
                            style={styles.text}
                        >Genero: {form.genero ? "Mujer" : "Hombre"}
                        </Text>
                        <Switch
                            style={styles.switch}
                            onValueChange={() => setGn()}
                            value={form.genero}
                        />
                    </View>
                    {/* Up foto */}
                    <View
                        style={styles.containerImagePerfill}
                    >
                        <Image
                            style={styles.imagePerfil}
                            source={{ uri: foto.uri }}
                        />
                        <IconButton
                            icon="camera"
                            onPress={() => { selectImage() }} />
                    </View>
                    {/* TextInput Nombre */}
                    <TextInput
                        style={styles.textInput}
                        label="Nombres"
                        value={form.names}
                        onChange={(e) => handleChange(e, 'names')}
                    />
                    <HelperText
                        style={styles.helpersText}
                        type="error"
                        visible={errorsForm.names && true}
                    >
                        {errorsForm.names}
                    </HelperText>
                    {/* TextInput Apellido */}
                    <TextInput
                        style={styles.textInput}
                        label="Apellidos"
                        value={form.surnames}
                        onChange={(e) => handleChange(e, 'surnames')}
                    />
                    <HelperText
                        style={styles.helpersText}
                        type="error"
                        visible={errorsForm.surnames && true}
                    >
                        {errorsForm.surnames}
                    </HelperText>
                    {/* Chips Intereses */}

                    <Text
                        style={[styles.text, { marginVertical: -20 }]}
                    >Intereses Otakus</Text>
                    <View style={styles.containerChip}>
                        <Chip
                            style={styles.chip}
                            mode={stateChip.Anime ? "flat" : "outlined"}
                            icon={stateChip.Anime ? 'check' : null}
                            onPress={() => setPreferences("Anime")}
                        >Anime</Chip>
                        <Chip
                            style={styles.chip}
                            mode={stateChip.Manga ? "flat" : "outlined"}
                            icon={stateChip.Manga ? 'check' : null}
                            onPress={() => setPreferences("Manga")}
                        >Manga</Chip>
                        <Chip
                            style={styles.chip}
                            mode={stateChip.BokuNoPiko ? "flat" : "outlined"}
                            icon={stateChip.BokuNoPiko ? 'check' : null}
                            onPress={() => setPreferences("BokuNoPiko")}
                        >Boku no Piko</Chip>
                        <Chip
                            style={styles.chip}
                            mode={stateChip.h ? "flat" : "outlined"}
                            icon={stateChip.h ? 'check' : null}
                            onPress={() => setPreferences("h")}
                        >Hidrogeno</Chip>
                        <Chip
                            style={styles.chip}
                            mode={stateChip.OnePice ? "flat" : "outlined"}
                            icon={stateChip.OnePice ? 'check' : null}
                            onPress={() => setPreferences("OnePice")}
                        >One Piece</Chip>
                    </View>
                    {/* TextInput Descripcion */}
                    <TextInput
                        style={styles.textInput}
                        label="Descripcion"
                        value={form.description}
                        onChange={(e) => handleChange(e, 'description')}
                    />
                    <HelperText
                        style={styles.helpersText}
                        type="error"
                        visible={errorsForm.description && true}
                    >
                        {errorsForm.description}
                    </HelperText>
                    {/* TextInput Edad */}
                    <TextInput
                        style={styles.textInput}
                        label="Edad"
                        keyboardType="number-pad"
                        value={form.age}
                        onChange={(e) => handleChange(e, 'age')}
                    />
                    <HelperText
                        style={styles.helpersText}
                        type="error"
                        visible={errorsForm.age && true}
                    >
                        {errorsForm.age}
                    </HelperText>
                    <Button
                        style={styles.button}
                        icon="login"
                        mode="contained"
                        loading={loading}
                        disabled={Object.keys(errorsForm).length !== 0 || loading}
                        onPress={() => handleSubmit(props)}
                    >Crear Cuenta</Button>
                    <Button
                        style={styles.button}
                        icon="arrow-left"
                        mode="text"
                        onPress={() => props.navigation.goBack()}
                    >Cancelar</Button>


                </View>
            </ScrollView>
        </ImageBackground>
    )
};

export default RegisterPage