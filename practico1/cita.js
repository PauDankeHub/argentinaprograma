let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";
let tamañoDeCita = cita.length;
console.log('El tamano de la cita es: ' + tamañoDeCita + '.');
let indice = cita.indexOf(substring);
console.log('El indice del substring es: ' + indice + '.');
let citaRevisada = cita.substring(0, 31);
console.log(citaRevisada + '.');