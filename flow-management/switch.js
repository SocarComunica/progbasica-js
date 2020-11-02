let nicolasEstaAtrasado = 0;

// if (nicolasEstaAtrasado === 0) {
//     console.log('Nicolas no está atrasado');
// } else if (nicolasEstaAtrasado === 1) {
//     console.log('Nicolas está atrasado una clase');
// } else if (nicolasEstaAtrasado === 2) {
//     console.log('Nicolas está atrasado dos clases');
// }

switch (nicolasEstaAtrasado) {
    case 0:
        console.log('Nicolas no está atrasado');
        break;

    case 1:
        console.log('Nicolas está atrasado una clase, debería llamar a preguntar');
        break;

    case 2:
        console.log('Nicolas está atrasado dos clases, debería llamar a su madre');
        break;
    
    default:
        console.log('Nicolas está atrasado '+nicolasEstaAtrasado+' clases');
        break;
}