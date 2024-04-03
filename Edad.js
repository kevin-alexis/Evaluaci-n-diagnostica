// ?  - Algoritmo de Cálculo de edad exacta (año, mes, semana, día, hora). (Básico).
// * • Realizar un algoritmo que calcula la edad de una persona. El usuario debe ingresar su año de nacimiento, día y hora.

function calcularEdadExacta() {
    const añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
    const mesNacimiento = parseInt(prompt("Ingrese su mes de nacimiento (1-12): "));
    const diaNacimiento = parseInt(prompt("Ingrese su día de nacimiento (1-31): "));
    const horaNacimiento = parseInt(prompt("Ingrese su hora de nacimiento (0-23): "));

    const fechaNacimiento = new Date(añoNacimiento, mesNacimiento - 1, diaNacimiento, horaNacimiento);

    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1;
    const diaActual = fechaActual.getDate();
    const horaActual = fechaActual.getHours();

    let edadAños = añoActual - añoNacimiento;
    let edadMeses = mesActual - mesNacimiento;
    let edadSemanas = Math.floor((fechaActual - fechaNacimiento) / (7 * 24 * 60 * 60 * 1000));
    let edadDias = Math.floor((fechaActual - fechaNacimiento) / (24 * 60 * 60 * 1000));
    let edadHoras = Math.floor((fechaActual - fechaNacimiento) / (60 * 60 * 1000));

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edadAños--;
        edadMeses += 12;
    }

    if (diaActual < diaNacimiento) {
        edadSemanas--;
        edadDias = diaActual + (30 - diaNacimiento); 
    }

    if (horaActual < horaNacimiento) {
        edadDias--;
        edadHoras = horaActual + (24 - horaNacimiento);
    }

    return {
        años: edadAños,
        meses: edadMeses,
        semanas: edadSemanas,
        dias: edadDias,
        horas: edadHoras
    };
}

const edadExacta = calcularEdadExacta();
console.log('Edad exacta:', edadExacta);

