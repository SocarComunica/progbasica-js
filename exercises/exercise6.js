/**
 * Imprimir las notas de un salón
 */
const notas = ['1, 2, 1, 3, 5, 6, 78, 9, 10, 12', 10, 12, 125, 35];

for (let i = 3; i < notas.length; i++) {
    console.log(i, notas[i]);
}
console.log('Longitud: ',notas.length);