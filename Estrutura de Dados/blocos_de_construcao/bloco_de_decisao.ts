/* Blocos de decisão/execução condicional
** Autor: Fabrício Galende Marques de Carvalho
*/


import * as prompt_sync from 'prompt-sync';

// /* bloco if-else */
// let a: number;
// let b: number = 1;
// if (b > 0 ){
//     a = 1;
// } else {
//     a = 0;
// }
// console.log(a);

// /* bloco switch-case */
// let c: number = 10;
// switch (c) {
//     case 10:
//         console.log("c é igual a 10");
//         break;
//     case 11:
//         console.log("c é igual a 11");
//         break;
//     default:
//         console.log("c possui outro valor");
// }


/* Usado para definir esse arquivo como um módulo
cujo escopo das variáveis é restrito a ele */
let name: string ;

const prompt = prompt_sync();
name = (prompt("Primeiro número: "));
switch (name) {
    case "Abebe Bikila":
        console.log("O nome é Abebe Bikila");
        break;
    case "Fauzi Halabe":
        console.log("Fauzi Halabe");
        break;

    case "Gustavo de Moraes Silva":
            console.log("o nome é Gustavo de Moraes Silva");
            break;
    default:
        console.log("Nenhum nome");
}





export {}