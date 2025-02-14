"use strict";
/* Expressando algoritmos diretamente com
** a linguagem de programação.
** Autor: Fabrício Galende M. de Carvalho.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync = require("prompt-sync");
var numero_1;
var numero_2;
var resultado;
// const prompt = prompt_sync();
// numero_1 = parseFloat(prompt("Primeiro número: "));
// numero_2 = parseFloat(prompt("Segundo número: "));
// resultado = numero_1 + numero_2;
// console.log(resultado);
var name;
var prompt = prompt_sync();
name = (prompt("Qual seu nome: "));
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
