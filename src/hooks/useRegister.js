import { useState } from "react";
import firebase from "../database/firebase";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, addDoc, setDoc, collection } from "firebase/firestore";
import { validationsLogin } from "../helpers/ValidationForms";
import { useForm } from "./useForm";

export const useRegister = (data) => {

    const auth = getAuth(firebase.app);
    const [loading, setLoading] = useState(false);
    const {
        form,
        errorsForm,
        stateChip,
        setErrorsFrom,
        handleChange,
        setPreferences,
        setGn,
    } = useForm(data);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorsFrom(validationsLogin(form));

        if (Object.keys(errorsForm).length === 0) {
            setLoading(true);
            console.log(auth);
            var user = "";
            try {
                await createUserWithEmailAndPassword(auth, form.email, form.password)
                    .then((userCredential) => {
                        user = userCredential.user;
                        console.log("Cuenta creada!");
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                await addDoc(collection(firebase.db, 'Perfiles'), {
                    preferences: stateChip,
                    names: form.names,
                    surnames: form.surnames,
                    age: form.age,
                    description: form.description,
                    uid: user.uid
                })
                    .then(() => {
                        console.log("Datos guardados!");

                    })
                    .catch((error) => {
                        console.log(error)
                    });
            } catch (error) {
                console.log(error)
            }
            setLoading(false);
        }
    }
    return {
        form,
        errorsForm,
        loading,
        stateChip,
        handleChange,
        handleSubmit,
        setPreferences,
        setGn
    };
}