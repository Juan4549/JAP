import React from "react";
import { useState } from "react";
import firebase from "../database/firebase";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { validationsForm } from "../helpers/ValidationForms";
import { useForm } from "./useForm";
import * as ImagePicker from 'expo-image-picker';

import { getDownloadURL, ref, uploadBytes, uploadString } from "firebase/storage";
export const useRegister = (data) => {

    const auth = getAuth(firebase.app);
    const [loading, setLoading] = useState(false);
    const [foto, setfoto] = React.useState('../../assets/fotoPerfil.jpg');

    const {
        form,
        errorsForm,
        stateChip,
        setErrorsFrom,
        handleChange,
        setPreferences,
        setGn,
    } = useForm(data);
    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            allowsEditing: true,
            aspect: [3, 3],
        });

        if (!result.canceled) {
            setfoto(result.assets[0]);
            console.log(result.assets[0]);
        } else {
            alert('You did not select any image.');
        }
    }
    const handleSubmit = async (props) => {
        setErrorsFrom(validationsForm(form));


        if (Object.keys(errorsForm).length === 0) {
            setLoading(true);
            var user = "";
            var urlFoto = "";
            try {
                await createUserWithEmailAndPassword(auth, form.email, form.password)
                    .then((userCredential) => {
                        user = userCredential.user;
                        console.log("Cuenta creada!");
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                const blob = await new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        resolve(xhr.response);
                    };
                    xhr.onerror = function (e) {
                        console.log(e);
                        reject(new TypeError("Network request failed"));
                    };
                    xhr.responseType = "blob";
                    xhr.open("GET", foto.uri, true);
                    xhr.send(null);
                });
                const storageRef = ref(firebase.storage, 'FotoPerfil/' + user.uid)
                console.log(foto)
                const metadata = {
                    contentType: 'image/jpeg',
                };
                await uploadBytes(storageRef, blob, metadata).then((snapshot) => {
                    console.log('Uploaded a blob or file!');
                    console.log(snapshot)
                });
                const fotoRef = ref(firebase.storage, 'FotoPerfil/' + user.uid)
                await getDownloadURL(storageRef)
                    .then((url) => {
                        urlFoto = url;
                    })
                await setDoc(doc(firebase.db, 'Perfiles', user.uid), {
                    preferences: stateChip,
                    genero: form.genero ? "Mujer" : "Hombre",
                    names: form.names,
                    surnames: form.surnames,
                    age: form.age,
                    description: form.description,
                    urlFoto: urlFoto,
                    uid: user.uid,
                    chats:[]
                })
                    .then(() => {
                        console.log("Datos guardados!");

                    })
                    .catch((error) => {
                        console.log(error)
                    });
                props.navigation.goBack()
            } catch (error) {
                console.log(error)
            }
            setLoading(false);
        }
    }
    return {
        form,
        foto,
        errorsForm,
        loading,
        stateChip,
        handleChange,
        handleSubmit,
        setPreferences,
        setGn,
        selectImage
    };
}