const readlineSync = require ('readline-sync');
const numstr = readlineSync.question('Ingrese un numero, por favor: ');
const numero = parseInt (numstr);

if (numero > 0) {
    console.log("El numero es positivo.");
} else if (numero < 0) {
    console.log("El numero es negativo.");
} else {
    console.log("El numero es cero.");
}


