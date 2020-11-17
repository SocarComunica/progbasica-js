// EXAM 1
// SOLUCIÓN
/**
 * 1. Mostrar el menú interactivo
 * 2. Escoger la opción
 */
const nombre = 'Socar';

const opcion1 = () => {
    for (let i = 0; i < 10; i++) {
        console.log(nombre);
    }
}

const opcion2 = () => {
    let control = 0;
    while (control < 10) {
        console.log(nombre);
        control++;
    }
}

const menu = () => {
    let option = parseInt(prompt('Ingresa la opción que desees\n1. Ejercicio for\n2. Ejercicio while\n3. Salir'));
    switch (option) {
        case 1:
            opcion1();
            break;
        case 2:
            opcion2();
            break;
        case 3:
            break;
        default:
            menu();
            break;
    }
}
menu();