import { useState } from "react";

import { validationsForm } from "../helpers/ValidationForms";

export const useForm = (data) => {
    const [form, setForm] = useState(data);
    const [errorsForm, setErrorsFrom] = useState({});
    const [stateChip, setStateChip] = useState({
        Anime: false,
        Manga: false,
        BokuNoPiko:false,
        h:false,
        OnePice:false
    });

    const handleChange = (e, name) => {
        setForm({
            ...form,
            [name]: e.nativeEvent.text,
        })
        setErrorsFrom(validationsForm(form))
    }
    const setPreferences = (value) => {
        if (!stateChip[value]) {
            setStateChip({ ...stateChip, [value]: true })
            console.log("se agrego " + value)
            console.log(stateChip)
            return
        }
        setStateChip({ ...stateChip, [value]: false })
        console.log("se elimino " + value)
        console.log(stateChip)
    }
    const setGn = () => {
        if (!form.genero) {
            setForm({
                ...form,
                genero:true,
            })
            console.log("Es mujer")
            return
        } setForm({
            ...form,
            genero:false,
        })
        console.log("Es Hombre ")
    }
    return {
        form,
        errorsForm,
        stateChip,
        setErrorsFrom,
        handleChange,
        setPreferences,
        setGn
    };
}