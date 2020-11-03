// EJERCICIO 4
/**
 * Escriba una calculadora que resuelva una división,
 * una multiplicación, una resta, una suma y un modulo
 */
// SOLUCIÓN
/**
 * 1. Obtener el número 1
 * 2. Obtener el número 2
 * 3. Realizar operaciones
 * 3.1. Verificar los numeros para la división y para el módulo
 */

// IMPLEMENTACIÓN
let number1 = parseInt(prompt('Ingresa el numero 1'));
let number2 = parseInt(prompt('Ingresa el numero 2'));

// SUMA
console.log(`La suma de ${number1} más ${number2} es igual a ${number1 + number2}`);
// RESTA
console.log(`La resta de ${number1} menos ${number2} es igual a ${number1 - number2}`);
// MULTIPLICACIÓN
console.log(`La multiplicación de ${number1} por ${number2} es igual a ${number1 * number2}`);
// DIVISIÓN
if (number2 === 0) {
    console.log('No se puede dividir por 0');
} else {
    console.log(`La división de ${number1} entre ${number2} es igual a ${number1 / number2}`);
}
// MÓDULO
if (number2 === 0) {
    console.log('No se puede realizar el módulo de un número dividido entre 0');
} else {
    console.log(`El módulo de ${number1} entre ${number2} es igual a ${number1 % number2}`);
}

