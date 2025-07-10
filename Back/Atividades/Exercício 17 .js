/* 
01. Escreva um programa que peça ao usuário para digitar um número e, em seguida,
imprima a tabuada desse número usando um loop while. */

import rl from 'readline-sync'

let num = rl.questionInt("Informe um Número: ");
let cnt = 1;
while (cnt <= 10) {
    console.log(`${cnt} x ${num} = ${cnt*num}`);
    cnt++;
}

/* 
comando para executar: node "Atividades/Exercício 17 .js"
*/
