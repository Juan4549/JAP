
export const validateEmail = (email) => {
    if (email === '') {
        return 'El email es requerido'
    }
    if (!RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).exec(email)) {
        return 'El email no es correcto'
    }
    return null
}

export function validationsForm(form) {
    let errors = {};
    if (!RegExp(/^[A-Za-zñÑ]+((\s)?(('|-|\.)?([A-Za-zñÑ])+))*$/).exec(form.names)) {
        errors.names = 'El nombre es incorrecto'
    }
    if (form.names === '') {
        errors.names = 'El nombre es requerido'
    }
    if (!RegExp(/^[A-Za-zñÑ]+((\s)?(('|-|\.)?([A-Za-zñÑ])+))*$/).exec(form.names)) {
        errors.names = 'El nombre es incorrecto'
    }
    if (form.names === '') {
        errors.names = 'El nombre es requerido'
    }
    const invalidEmail = validateEmail(form.email);
    if (!!invalidEmail)
        errors.email = invalidEmail;

    return errors
}
export function validationsLogin(form) {
    let errors = {};
    const invalidEmail = validateEmail(form.email);
    if (!!invalidEmail)
        errors.email = invalidEmail;
    if (form.password === '') {
        errors.password = 'La contraseña es requerida'
    }
    return errors
}