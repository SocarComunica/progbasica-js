// EJERCICIO 2
/* Crear un programa que sume dos numeros y los imprima en pantalla */

// SOLUCIÓN
/**
 * 1. Ingresar el primer número
 * 2. Ingresar el segundo número
 * 3. Sumar ambos números
 * 4. Imprimir el resultado
 */

// IMPLEMENTACIÓN
let number1 = 0;
let number2 = 0;

number1 = parseInt(prompt('Ingresa el número 1'));
number2 = parseInt(prompt('Ingresa el número 2'));

let result = number1 + number2;
let resultField = document.getElementById('result');
resultField.innerHTML = result;
console.log(result);
