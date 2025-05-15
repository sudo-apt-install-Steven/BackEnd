/* 
1. Solicite ao usuário para inserir um número representando um dia da
semana (1 a 7) e mostre o nome do dia correspondente.

*/

/*
let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número de 1 a 7 para representar um dia da semana: ', (numeroDia) => {
    let dia = parseInt(numeroDia);
    
    // Switch case (como um if/else)
    switch(dia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        case 4:
            console.log("Quarta-feira");
            break;
        case 5:
            console.log("Quinta-feira");
            break;
        case 6:
            console.log("Sexta-feira");
            break;
        case 7:
            console.log("Sábado");
            break;
        default:
            console.log("Número inválido! Digite um número de 1 a 7.");
    }
    
    rl.close();
});*/

/* para executar o código apenas rode este comando no terminal: node "atividades BackEnd/Exercício 13 .js"
*/


let ddia = 3;

if (ddia == 1) console.log("Domingo");
if (ddia == 2) console.log("Segunda-Feira");
if (ddia == 3) console.log("Terça-Feira");
if (ddia == 4) console.log("Quarta-Feira");
if (ddia == 5) console.log("Quinta-Feira");
if (ddia == 6) console.log("Sexta-Feira");
if (ddia == 7) console.log("Sábado");