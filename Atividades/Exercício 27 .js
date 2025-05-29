/*

03. Crie uma função que receba dois números como
parâmetros e retorne a soma deles.

*/



import rl from 'readline-sync';


let num1 = rl.questionInt('Digite o primeiro número: ');
let num2 = rl.questionInt('Digite o segundo número: ');


function somarNumeros(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        return 'Por favor, insira números válidos.';
    }
    
    return numero1 + numero2;
}


console.log(`A soma dos números é: ${somarNumeros(num1, num2)}`);


/*
    comando para executar: node "Atividades/Exercício 29 .js"

    comando para suportar acentos: chcp 65001
*/