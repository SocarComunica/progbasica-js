// EJERCICIO 3
/**
 * Escriba un programa que diga si un número es par
 */

// SOLUCIÓN
/**
 * 1. Obtener el número
 * 2. Obtener el modulo del número dividido
 * 3. Si el modulo es 0, el numero es par
 * 4. Si el modulo es diferente de 0 el numero es impar
 */

let number = parseInt(prompt('Ingrese el número'));
let module = number % 2;

if (module === 0) {
    console.log('El número '+number+' es par');
} else {
    console.log('El número '+number+' es impar');
}