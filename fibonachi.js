// ? - Algoritmo de sucesión de Fibonacci. (Avanzado).
// * • Realiza un algoritmo que dibuje la sucesión de Fibonacci hasta la posición que el usuario ingrese.

function fibonacci(posicionSeleccionada) {
    let resultado = [];
    for (let i = 0; i <= (posicionSeleccionada  - 1) ; i++) {
        if (i <= 1) {
            resultado.push(i);
        } else {
            resultado.push(resultado[i - 1] + resultado[i - 2]);
        }
    }
    return resultado.join(', ');
}

console.log(fibonacci(prompt("Inserta el número de la posición deseada: ")));