/*
07. Desenvolva uma função que converta
uma temperatura de Celsius para Fahrenheit.
A função deve receber a temperatura em
Celsius como parâmetro e retornar a
temperatura convertida.
*/

import rl from 'readline-sync';



let temperaturaCelsius = rl.questionFloat('Digite a temperatura em Celsius: ');

function converterCelsiusParaFahrenheit(celsius) {
    if (typeof celsius !== 'number') {
        return 'Por favor, insira um valor válido para a temperatura.';
    }
    
    const fahrenheit = (celsius * 9/5) + 32;
    return `A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`;
}

console.log(converterCelsiusParaFahrenheit(temperaturaCelsius));



/*
    comando para executar: node "Atividades/Exercício 31 .js"

    comando para suportar acentos: chcp 65001
*/