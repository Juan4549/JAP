import { useState } from "react";
import {app} from "../database/firebase";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import { useForm } from "./useForm";
import { validationsLogin } from "../helpers/ValidationForms";

export const useLogin = (data) => {

    const auth = getAuth(app);
    const {
        form,
        errorsForm,
        setErrorsFrom,
        handleChange,
    } = useForm(data);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (props) => {
        setErrorsFrom(validationsLogin(form));
        if (Object.keys(errorsForm).length === 0) {
            setLoading(true);
            signInWithEmailAndPassword(auth,form.email,form.password)
            .then((userCredentials) => {
                console.log("Inicio sesion")
                const user=userCredentials.user;
                props.navigation.navigate('Home')
            })
            .catch((error) => {
                console.log(error)
            });
            setLoading(false);
        }
    }
    return {
        form,
        errorsForm,
        loading,
        handleChange,
        handleSubmit,
    };
}