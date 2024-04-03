// ? - Algoritmo para generar contraseñas. (Intermedio).
// * • Realizar un algoritmo que permita generar contraseñas aleatorias con los requerimientos proporcionados (longitud mínima de 8 caracteres, al menos una letra mayúscula, un carácter especial y un número.)	


function generadorContraseña() {
    let longitudMinima = 8;
    const caracteresPermitidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";  
    const regexMayuscula = /[A-Z]/;
    const regexEspecial = /[!@#$%^&*()_+]/;
    const regexNumero = /[0-9]/;
    let contraseña = "";
    let tieneMayuscula = false;
    let tieneEspecial = false;
    let tieneNumero = false;

    while (!tieneMayuscula || !tieneEspecial || !tieneNumero || contraseña.length < longitudMinima) {
        const caracterAleatorio = caracteresPermitidos.charAt(Math.floor(Math.random() * caracteresPermitidos.length));
        contraseña += caracterAleatorio;

        if (!tieneMayuscula && regexMayuscula.test(caracterAleatorio)) {
            tieneMayuscula = true;
        } else if (!tieneEspecial && regexEspecial.test(caracterAleatorio)) {
            tieneEspecial = true;
        } else if (!tieneNumero && regexNumero.test(caracterAleatorio)) {
            tieneNumero = true;
        }
    }

    return contraseña;
}

console.log(generadorContraseña());