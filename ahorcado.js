// ? - Algoritmo de un ahorcado. (Intermedio).
// * • Se genera una palabra aleatoria (oculta al usuario) y el usuario debe 
// * ingresar letra por letra para intentar adivinar la palabra, se debe validar 
// * que las letras coincidan con la posición de las letras de la palabra generada. Máximo 5 errores.

function generarPalabra() {
    var palabras = ["javascript", "programacion", "computadora", "algoritmo", "desarrollo"];
    return palabras[Math.floor(Math.random() * palabras.length)];
}

function mostrarPalabraOculta(palabra, letrasAdivinadas) {
    var palabraMostrada = "";
    for (var i = 0; i < palabra.length; i++) {
        if (letrasAdivinadas.includes(palabra[i])) {
            palabraMostrada += palabra[i];
        } else {
            palabraMostrada += "_";
        }
    }
    return palabraMostrada;
}

function jugarAhorcado() {
    var palabraSecreta = generarPalabra();
    var letrasAdivinadas = [];
    var intentos = 0;
    var maxIntentos = 5;

    console.log("¡Comienza el juego del ahorcado!, ¿Crees conseguirlo?");
    console.log("Adivina la palabra secreta: " + mostrarPalabraOculta(palabraSecreta, letrasAdivinadas));

    while (true) {
        if (intentos >= maxIntentos) {
            console.log("Has alcanzado el máximo de intentos. ¡Perdiste!");
            console.log("La palabra secreta era: " + palabraSecreta);
            break;
        }

        var letra = prompt("Ingresa una letra: ").toLowerCase();

        if (letra.length !== 1 || !letra.match(/[a-z]/)) {
            console.log("Ingresa una letra válida.");
            continue;
        }

        if (letrasAdivinadas.includes(letra)) {
            console.log("Ya has ingresado esa letra. Intenta con otra.");
            continue;
        }

        if(!palabraSecreta.includes(letra)){
            intentos++;
            console.log("Esta letra no esta en la palabra");
        }

        letrasAdivinadas.push(letra);

        var palabraMostrada = mostrarPalabraOculta(palabraSecreta, letrasAdivinadas);
        console.log(palabraMostrada);

        if (palabraMostrada === palabraSecreta) {
            console.log("¡Felicidades! Has adivinado la palabra secreta.");
            break;
        }
    }
}

jugarAhorcado();
