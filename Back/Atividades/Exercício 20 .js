/*

01. Escreva um programa que calcule e imprima os primeiros 20 números da sequência de Fibonacci.

*/


let vlr1 = 1;
let vlr2 = 1;
console.log(1);
console.log(1);

for (let i = 0; i < 18; i++) {
    let resposta = (vlr1+vlr2);
    console.log(resposta);
    vlr1 = vlr2;
    vlr2 = resposta
}

/*
    comando para executar: node "Atividades/Exercício 20 .js"
*/
