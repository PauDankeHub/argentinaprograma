let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];

let rechazados = [];
let admitidos = [];

for (let i = 0; i < personas.length; i++) {
    if (personas[i] === "Jose" || personas[i] === "Sofia") {
        rechazados.push(personas[i]);
    } else {
        admitidos.push(personas[i]);
    }
}

admitidos.sort();
rechazados.sort();

console.log("\nLa Lista ordenada de invitados admitidos es: ");
admitidos.forEach(a=> console.log(a));

console.log("\nLa Lista ordenada de invitados rechazados es: ");
rechazados.forEach(a=> console.log(a));
