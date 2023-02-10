
export const validateEmail = (email) => {
    if (email === '') {
        return 'El email es requerido'
    }
    if (!RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).exec(email)) {
        return 'El email no es correcto'
    }
    return null
}

export function validationsForm(form){
    let errors = {};
    if (!RegExp(/^[A-Za-zñÑ]+((\s)?(('|-|\.)?([A-Za-zñÑ])+))*$/).exec(form.names)) {
        errors.names = 'El nombre es incorrecto'
    }
    if (form.names==='') {
        errors.names = 'El nombre es requerido'
    }

    if (!RegExp(/^[A-Za-zñÑ]+((\s)?(('|-|\.)?([A-Za-zñÑ])+))*$/).exec(form.surname1)) {
        errors.surname1 = 'El apellido paterno es incorrecto'
    }
    if (form.surname1=== '') {
        errors.surname1 = 'El apellido paterno es requerido'
    }

    if (form.surname2 !== '' && !RegExp(/^[A-Za-zñÑ]+((\s)?(('|-|\.)?([A-Za-zñÑ])+))*$/).exec(form.surname2)) {
        errors.surname2 = 'El apellido materno es incorrecto'
    }

    const invalidEmail = validateEmail(form.email);
    if (!!invalidEmail)
        errors.email = invalidEmail;

    if (!RegExp(/^(09)[0-9]\d{7}$/).exec(form.mobilePhone)) {
        errors.mobilePhone = 'El Teléfono celular es incorrecto'
    }
    if (form.mobilePhone === '') {
        errors.mobilePhone = 'El Teléfono celular es requerido'
    }
    return errors
}
export function validationsLogin(form){
    let errors = {};

    const invalidEmail = validateEmail(form.email);
    if (!!invalidEmail)
        errors.email = invalidEmail;
    return errors
}