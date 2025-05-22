/* 
3. Implementar um programa que simule uma calculadora. O usuário deverá
informar dois valores e a operação desejada.
Com auxílio de um switch deve ser computado e mostrado o resultado da
operação.
*/
import rl from 'readline-sync'

let x = rl.questionFloat("Informe o primeiro valor: ")
let y = rl.questionFloat("Informe o Segundo valor: ")
let op = rl.questionInt("Escolha uma opção: \n 1-   Soma. \n 2-  Subtração. \n 3-  Multiplicação. \n 4-  Divisão. \n - Informe a opção desejada: ")

switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x+y}`);
        break;
    case 2:
        console.log(`${x} - ${y} = ${x-y}`);
        break;
    case 3:
        console.log(`${x} X ${y} = ${x*y}`);
        break;
    case 4:
        console.log(`${x} / ${y} = ${x/y}`);
        break;
    default:
        console.log("   Opção Inválida!!! \n    Pare de ser Burro e faz algo da vida.")
        break;
}

/* 
comando para executar: node "Atividades/Exercício 15 .js"
*/
