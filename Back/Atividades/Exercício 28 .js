/*
04. Crie uma função que receba um valor e uma
porcentagem como parâmetros. A função deve retornar o
valor acrescido da porcentagem indicada.
*/

import rl from 'readline-sync';

let valor = rl.questionFloat('Digite o valor: ');
let porcentagem = rl.questionFloat('Digite a porcentagem: ');

function calcularPorcentagem(valor, porcentagem) {
    if (typeof valor !== 'number' || typeof porcentagem !== 'number') {
        return 'Por favor, insira valores válidos.';
    }
    
    const resultado = valor + (valor * (porcentagem / 100));
    return `O valor com a porcentagem de ${porcentagem}% é: ${resultado.toFixed(2)}`;
}

console.log(calcularPorcentagem(valor, porcentagem));


/*
    comando para executar: node "Atividades/Exercício 28 .js"

    comando para suportar acentos: chcp 65001
*/