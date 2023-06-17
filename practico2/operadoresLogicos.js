const readlineSync = require ('readline-sync');
const entStr = readlineSync.question ('Por favor, ingrese un numero entero: ');
const entero = parseInt (entStr);

if (entero > 0 && entero % 2 == 0) {
    console.log ("El numero es positivo y par.");
} else if (entero > 0 && entero % 2 == 1) {
    console.log ("El numero es positivo e impar.");
} else if (entero < 0) {
    console.log ("El numero es negativo.");
} else {
    console.log ("El numero es cero.");
}