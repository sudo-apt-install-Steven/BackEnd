/*
08. Crie uma função que calcula o IMC. A
função deve receber a altura e o peso como
parâmetros e retornar o IMC.
*/

import rl from 'readline-sync';

let altura = rl.questionFloat('Digite a altura em metros: ');
let peso = rl.questionFloat('Digite o peso em kg: ');

function calcularIMC(altura, peso) {
    if (typeof altura !== 'number' || typeof peso !== 'number' || altura <= 0 || peso <= 0) {
        return 'Por favor, insira valores válidos para altura e peso.';
    }
    
    const imc = peso / (altura * altura);
    return `O IMC calculado é: ${imc.toFixed(2)}`;
}

console.log(calcularIMC(altura, peso));




/*
    comando para executar: node "Atividades/Exercício 32 .js"

    comando para suportar acentos: chcp 65001
*/