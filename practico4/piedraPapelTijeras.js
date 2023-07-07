const readlineSync = require('readline-sync');

const opciones = ['piedra', 'papel', 'tijera'];

const piedra = opciones [0]; 
const papel = opciones [1];
const tijera = opciones [2];

function obtenerJugadaComputadora(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1) + min);
}

const randNum = obtenerJugadaComputadora(0, 2); 
const PC = opciones[randNum]; 
console.log('La computadora ya eligio su jugada.');

function obtenerJugadaUsuario() {
    return readlineSync.questionInt (
        'Elige un valor entre: \n' +
        'Piedra: 0 \n' +
        'Papel: 1 \n' +
        'Tijera: 2 \n' +
        'Numero: '
    )
}

const Player = obtenerJugadaUsuario();

const empate = "Empate";
const pcWin = "Gano Computadora!";
const playerWin = "Gano Usuario!";

function determinarGanador(PC, Player){
    if(PC === Player){
      return empate;
    } 
    else if(
        PC === piedra && Player === 2 ||
        PC === tijera && Player === 1 ||
        PC === papel && Player === 0
    ){
      return pcWin;
    } 
    else{
      return playerWin;
    }
}

let resultado = determinarGanador(PC, Player);

console.log ('La computadora eligio: ', PC, '. El usuario eligio: ', Player, '. El resultado fue: ', resultado);
