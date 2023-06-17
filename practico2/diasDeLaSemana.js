const readlineSync = require ('readline-sync');
const dia = parseInt (readlineSync.question ('Por favor, ingrese un numero del 1 al 7: '));

let diaNombre = "";
let diaNumero = "";

switch(dia) {
    case 1: 
        diaNombre = "Lunes";
        diaNumero = 1;
        break;
    
    case 2:
        diaNombre = "Martes";
        diaNumero = 2;
        break;

    case 3:
        diaNombre = "Miercoles";
        diaNumero = 3;
        break;
        
    case 4:
        diaNombre = "Jueves";
        diaNumero = 4;
        break;
        
    case 5:
        diaNombre = "Viernes";
        diaNumero = 5;
        break;
        
    case 6:
        diaNombre = "Sabado";
        diaNumero = 6;
        break;
        
    case 7:
        diaNombre = "Domingo";
        diaNumero = 7;
        break;         
}

if (dia === diaNumero) {
    console.log("Hoy es " + diaNombre + ".");
} else {
    console.log("Numero invalido.");
}





