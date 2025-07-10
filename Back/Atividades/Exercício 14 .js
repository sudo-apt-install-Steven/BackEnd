/* 2. Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome
do mês.
*/
/*
let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número de 1 a 12 para representar um mês: ', (numeroMes) => {
    let mes = parseInt(numeroMes);
    
    switch(mes) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro"); 
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;
        case 12:
            console.log("Dezembro");
            break;
        default:
            console.log("Número inválido! Digite um número de 1 a 12.");
    }
    
    rl.close();
});

*/
/* comando para executar: node "atividades BackEnd/Exercício 14 .js" 
*/

import rl from 'readline-sync';

let mes = rl.questionInt("Informe um valor entre 1 e 12: ")

if (mes == 1) console.log("Janeiro");
if (mes == 2) console.log("Fevereiro");
if (mes == 3) console.log("Março");
if (mes == 4) console.log("Abril");
if (mes == 5) console.log("Maio");
if (mes == 6) console.log("Junho");
if (mes == 7) console.log("Julho");
if (mes == 8) console.log("Agosto");
if (mes == 9) console.log("Setembro");
if (mes == 10) console.log("Outubro");
if (mes == 11) console.log("Novembro");
if (mes == 12) console.log("Dezembro");

/* 

comando para Executar: node "Atividades/Exercício 14 .js"

*/