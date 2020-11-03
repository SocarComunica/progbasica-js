// PROGRAMACIÓN FUNCIONAL
// EJERCICIO 5
/**
 * Escriba una calculadora que resuelva una división,
 * una multiplicación, una resta, una suma o un modulo
 * dependiendo de la entrada del usuario
 */
// SOLUCIÓN
/**
 * 1. Mostrar el menú interactivo
 * 1. Obtener la entrada de la operación
 * 2. Obtener el primer numero
 * 3. Obtener el segundo numero
 */

let number1;
let number2;

const ingresarNumeros = () => {
    number1 = parseInt(prompt('Ingresa el primer número'));
    number2 = parseInt(prompt('Ingresa el segundo número'));
}

const suma = () => {
    ingresarNumeros();
    console.log(`La suma de ${number1} más ${number2} es igual a ${number1 + number2}`);
}
const resta = () => {
    ingresarNumeros();
    console.log(`La resta de ${number1} menos ${number2} es igual a ${number1 - number2}`);
}
const multiplicacion = () => {
    ingresarNumeros();
    console.log(`La multiplicación de ${number1} por ${number2} es igual a ${number1 * number2}`);
}
const division = () => {
    ingresarNumeros();
    if (verificarCero()) {
        console.log('No se puede dividir por 0');
    } else {
        console.log(`La división de ${number1} entre ${number2} es igual a ${number1 / number2}`);
    }
}
const modulo = () => {
    ingresarNumeros();
    if (verificarCero()) {
        console.log('No se puede realizar el módulo de un número dividido entre 0');
    } else {
        console.log(`El módulo de ${number1} entre ${number2} es igual a ${number1 % number2}`);
    }
}
const verificarCero = () => {
    return number2 === 0;
}

const menuInteractivo = () => {
    let option = parseInt(prompt('Ingresa la opción a realizar\n1.Suma\n2.Resta\n3.Multiplicación\n4.División\n5.Módulo'));

    switch (option) {
        case 1:
            suma();
            break;
        case 2:
            resta();
            break;
        case 3:
            multiplicacion();
            break;
        case 4:
            division();
            break;
        case 5:
            modulo();
            break;
        default:
            console.log('Ingresó una opción no válida, no sea retrasado');
    }
}

menuInteractivo();
