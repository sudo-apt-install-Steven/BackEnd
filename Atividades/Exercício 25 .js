/*

01. Crie uma função que receba uma string como
parâmetro e retorne a mesma string com todas as letras
em caixa alta.


*/
import rl from 'readline-sync'

let frase = rl.question("Informe o texto para ser convertido: ");

//console.log(Maiusculas(frase));           /* Não precisa estar apósa função para funcionar. */
//Declaração de Função.
function Maiusculas(texto) {
    return texto.toUpperCase();
};


/*--------------------------------------------------------------------------------------------------------------------------------------*/
/*______________________________________________________________________________________________________________________________________*/


//Expressão de Função.
const cxAlta = function (texto) {
    return texto.toUpperCase();
};
//console.log(cxAlta(frase))


/*--------------------------------------------------------------------------------------------------------------------------------------*/
/*______________________________________________________________________________________________________________________________________*/


//Função de Seta.
const tdMaiusculas = (texto) => texto.toUpperCase();
console.log(tdMaiusculas(frase));