/*
05. Desenvolva uma função que calcule o valor de um
produto com desconto. A função deve receber o valor
original do produto e o percentual de desconto como
parâmetros, e retornar o valor com desconto aplicado.
Utilize essa função para calcular o valor final de
diferentes produtos.
*/

import rl from 'readline-sync';

let valorOriginal = rl.questionFloat('Digite o valor original do produto: ');
let percentualDesconto = rl.questionFloat('Digite o percentual de desconto: ');

function calcularValorComDesconto(valor, desconto) {
    if (typeof valor !== 'number' || typeof desconto !== 'number') {
        return 'Por favor, insira valores válidos.';
    }
    
    const valorComDesconto = valor - (valor * (desconto / 100));
    return `O valor do produto com ${desconto}% de desconto é: ${valorComDesconto.toFixed(2)}`;
}


console.log(calcularValorComDesconto(valorOriginal, percentualDesconto));


/*
    comando para executar: node "Atividades/Exercício 29 .js"

    comando para suportar acentos: chcp 65001
*/