/* 
1. Solicite ao usuário para inserir um número representando um dia da
semana (1 a 7) e mostre o nome do dia correspondente.

*/

import rl from 'readline-sync';

let ddia = rl.questionInt("Informe um valor entre 1 e 7: ")

if (ddia == 1) console.log("Domingo");
if (ddia == 2) console.log("Segunda-Feira");
if (ddia == 3) console.log("Terça-Feira");
if (ddia == 4) console.log("Quarta-Feira");
if (ddia == 5) console.log("Quinta-Feira");
if (ddia == 6) console.log("Sexta-Feira");
if (ddia == 7) console.log("Sábado");

/* 

comando para Executar: node "Atividades/Exercício 13 .js"

*/