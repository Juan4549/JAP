import { useContext, useState } from "react";
import firebase from "../database/firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useForm } from "./useForm";
import { validationsForm } from "../helpers/ValidationForms";
import { AuthContext } from "../context/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useMatch } from "./useMatch";

export const useLogin = (data) => {

    const auth = getAuth(firebase.app);
    const {
        form,
        errorsForm,
        setErrorsFrom,
        handleChange,
    } = useForm(data);
    const { getMatch } = useMatch();

    const [loading, setLoading] = useState(false);
    const [u, setU] = useContext(AuthContext);
    var user = {};
    var data = {};
    const handleSubmit = async (props) => {

        setErrorsFrom(validationsForm(form));
        if (Object.keys(errorsForm).length === 0) {
            setLoading(true);
            try {
                await signInWithEmailAndPassword(auth, form.email, form.password)
                    .then((userCredentials) => {
                        console.log("Inicio sesion")
                        user = userCredentials.user;
                        //console.log(user);
                    });
                const q = query(collection(firebase.db, "Perfiles"), where("uid", "==", user.uid));
                const querySnapshot = await getDocs(q);
                //console.log(querySnapshot)
                querySnapshot.forEach((doc) => {
                    //console.log(doc.data());
                    data = doc.data()
                    console.log('Obtencion de datos del usuario');
                });
                console.log(user)
                console.log(data)
                console.log("Obtencion de matchs")
                var matchs = await getMatch(data.genero,data)
                console.log("Guardado de datos")
                setU({ ...u, auth: user, user: data, matchs: matchs });
                //console.log(u);
            } catch (error) {
                signOut(auth).then(() => {
                    // Sign-out successful.
                    console.log('Session cerrada');
                });
                alert(error)
                console.log(error)
            }
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