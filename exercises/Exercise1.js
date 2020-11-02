const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Programación estructurada
// 1. Ejercicio:
/*
Escribir un programa que imprima su nombre en pantalla
*/

// SOLUCIÓN
/*
1. Obtener el nombre
2. Imprimir el nombre
*/

// IMPLEMENTACIÓN
rl.question('Cuál es tu nombre?\n', (answer) => {
    console.log('Te llamas: '+answer);
    rl.close();
});