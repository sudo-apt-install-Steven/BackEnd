/*

02. Crie uma função que receba um número como
parâmetro e verifique se ele é par ou ímpar. Retorne uma
string.

*/
import rl from 'readline-sync';


let num = rl.questionInt('Digite um número: ');



function verificarParOuImpar(numero) {
    if (typeof numero !== 'number') {
        return 'Por favor, insira um número válido.';
    }
    
    return numero % 2 === 0 ? 'O número é par.' : 'O número é ímpar.';
}



console.log(verificarParOuImpar(num));



/*
    comando para executar: node "Atividades/Exercício 26 .js"

    comando para suportar acentos: chcp 65001
*/