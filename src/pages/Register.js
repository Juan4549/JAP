import React from "react";
import { View, Text } from "react-native";
import { validationsForm } from "../helpers/ValidationForms";

const RegisterPage = () => {
    var [dataForm, setDataForm] = React.useState({
        names: '',
        surnames: '',
        preferences: '',
        age: '',
        description: '',
    });
    var [errorValidations,setErrorValidations] =React.useState({});
    const handleChangeText = (name, value) => {
        setDataForm({ ...dataForm, [name]: value })
        setErrorValidations(dataForm);
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
                Registro
            </Text>
            <TextInput
                label="Nombres"
                value={dataForm.names }
                onChangeText={handleChangeText('names',dataUser.names) }
            />
            <HelperText
                type="error"
                visible={errorValidations.names }
            >
                { }
            </HelperText>
            <TextInput
                label="Apellidos"
                value={dataForm.surnames }
                onChangeText={handleChangeText('surnames',dataUser.surnames) }
            />
            <HelperText
                type="error"
                visible={errorValidations.surname1 }
            >
                { }
            </HelperText>
            <Chip icon="information" onPress={() => console.log('Pressed')}>Anime</Chip>
            <TextInput
                label="Descripcion"
                value={dataForm.description }
                onChangeText={handleChangeText('description',dataUser.description) }
            />
            <HelperText
                type="error"
                visible={ errorValidations}
            >
                { }
            </HelperText>
            <TextInput
                label="Edad"
                value={dataForm.age }
                onChangeText={handleChangeText('age',dataUser.age) }
            />
            <HelperText
                type="error"
                visible={errorValidations }
            >
                { }
            </HelperText>
        </View>
    )
};

export default RegisterPage