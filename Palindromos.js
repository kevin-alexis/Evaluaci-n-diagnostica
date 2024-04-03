// ? - Algoritmo para validar palíndromos. (Básico). 
// * • Realizar un sencillo algoritmo para validar si una palabra es un palíndromo, el usuario debe ingresar una palabra 
// * y se le retorna un mensaje de valido o invalido.
// ! Un palíndromo es una palabra o frase que se lee igual en un sentido que en otro. 


function validarPalindromo(palabra){
    let palabraSinEspacios = palabra.replace(/\s/g, '');
    let palabraAMinuscula = palabraSinEspacios.toLowerCase();
    let palabraReversa = palabraAMinuscula.split("").reverse().join("");
    return palabraAMinuscula === palabraReversa ? "valido" : "invalido"
}

console.log(validarPalindromo(prompt("Ingresa una palabra: ")));
