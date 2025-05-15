/* 
3. Implementar um programa que simule uma calculadora. O usuário deverá
informar dois valores e a operação desejada.
Com auxílio de um switch deve ser computado e mostrado o resultado da
operação.
*/
import entradaDados from 'readline-sync';
let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
        rl.question('Digite a operação desejada (+, -, *, /): ', (operacao) => {
            
            // Convertendo strings para números
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let resultado;

            switch(operacao) {
                case '+':
                    resultado = num1 + num2;
                    console.log(`${num1} + ${num2} = ${resultado}`);
                    break;
                case '-':
                    resultado = num1 - num2;
                    console.log(`${num1} - ${num2} = ${resultado}`);
                    break;
                case '*':
                    resultado = num1 * num2;
                    console.log(`${num1} * ${num2} = ${resultado}`);
                    break;
                case '/':
                    if(num2 === 0) {
                        console.log("Erro: Divisão por zero não é permitida!");
                    } else {
                        resultado = num1 / num2;
                        console.log(`${num1} / ${num2} = ${resultado}`);
                    }
                    break;
                default:
                    console.log("Operação inválida! Use +, -, * ou /");
            }
            
            rl.close();
        });
    });
});

/* 
comando para executar: node "atividades BackEnd/Exercício 15 .js"
*/
