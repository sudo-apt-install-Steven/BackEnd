/* 

01. a) Escreva um programa que simule um jogo de adivinhação
onde o usuário deve adivinhar um número aleatório entre 1 e 100.
O programa deve fornecer dicas sobre se o número digitado é
maior ou menor que o número aleatório. O jogo deve continuar até
que o usuário adivinhe corretamente.

*/

import rl from 'readline-sync';

const numAleatorio = Math.floor(Math.random() * 100) + 1;
let cnt = 0
let tent;

do {
    tent = rl.questionInt(`\n       Tente adivinhar o número (entre 1 e 100) `);
    cnt++
    if (tent === numAleatorio) {
        console.log(`       Parabéns! você acertou o número: ${numAleatorio} `)
        console.log(`       Tentativas feitas: ${cnt}. `)
    } else if (tent < numAleatorio) {
        console.log(`\n       Tente um número Maior. `)
        console.log(`       Tentativas feitas: ${cnt}. `)
    } else {
        console.log(`\n       Tente um Número Menor. `)
        console.log(`       Tentativas feitas: ${cnt}. `)
    }

} while (tent !== numAleatorio);

/*
    comando para executar: node "Atividades/Exercício 19 .js"
*/