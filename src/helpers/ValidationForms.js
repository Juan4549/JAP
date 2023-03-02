
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
    /* Email */
    if (!RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).exec(form.email)) {
        errors.email = 'El email no es correcto'
    }
    if (form.email === '') {
        errors.email = 'El email es requerido'
    }
    /* Contraseña */
    if (form.password === '') {
        errors.password = 'La contraseña es requerida'
    }
    /* Nombre */
    if (!RegExp(/^[A-Za-zñÑ]+((\s)?(('|-|\.)?([A-Za-zñÑ])+))*$/).exec(form.names)) {
        errors.names = 'El nombre es incorrecto'
    }
    if (form.names === '') {
        errors.names = 'El nombre es requerido'
    }
    /* Apellidos */
    if (!RegExp(/^[A-Za-zñÑ]+((\s)?(('|-|\.)?([A-Za-zñÑ])+))*$/).exec(form.surnames)) {
        errors.surnames = 'El apellido es incorrecto'
    }
    if (form.surnames === '') {
        errors.surnames = 'El apellido es requerido'
    }
    /* Descripcion */
    if (form.description === '') {
        errors.description = 'Escriba una descripción'
    }
    /* Edad */
    if (form.age === '') {
        errors.age = 'Ingrese su edad'
    }
    return errors
}
