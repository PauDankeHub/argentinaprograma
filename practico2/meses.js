const readlineSync = require ('readline-sync');
const numeroString = readlineSync.question ('Por favor, ingrese un numero del 1 al 12: ');
const numero = parseInt (numeroString);

const arregloDe31Dias = [1, 3, 5, 7, 8, 10, 12];
const arregloDe30Dias = [4, 6, 9, 11];
const meses = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre",
}


if (arregloDe31Dias.includes(numero)) {
    console.log("La cantidad de dias del mes de %s es 31.", meses[numero]);
} else if (arregloDe30Dias.includes(numero)) {
    console.log("La cantidad de dias del mes de %s es 30.", meses[numero]);
} else if (numero === 2) {
    console.log("La cantidad de dias del mes de %s es 28.", meses[numero]);
} else {
    console.log("El numero ingresado es incorrecto.");
}
