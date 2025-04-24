/* 2. Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome
do mês.
*/

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


/* comando para executar: node "atividades BackEnd/Exercício 14 .js" 
*/

