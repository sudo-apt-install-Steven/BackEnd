/*
06. Desenvolva uma função que calcule a
área de um círculo. A função deve receber o
raio como parâmetro e retornar a área
calculada.
*/

import rl from 'readline-sync';



let raio = rl.questionFloat('Digite o raio do círculo: ');

function calcularAreaCirculo(raio) {
    if (typeof raio !== 'number' || raio < 0) {
        return 'Por favor, insira um valor válido para o raio.';
    }
    
    const area = Math.PI * Math.pow(raio, 2); // Math.pow é elevar, exemplo: Math.pow(2, 3); seria 2 elevado a 3.
    return `A área do círculo com raio ${raio} é: ${area.toFixed(2)}`;
}

console.log(calcularAreaCirculo(raio));


/*
    comando para executar: node "Atividades/Exercício 30 .js"

    comando para suportar acentos: chcp 65001
*/