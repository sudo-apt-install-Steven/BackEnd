/* 4. Um funcionário irá receber um aumento de acordo com o seu
categoria de bonificação (A,B,C e D).
A tabela abaixo mostra o percentual de aumento de cada
categoria:
Faça um programa que leia a categoria de bonificação e o
salário atual de um funcionário, em seguida calcule e
imprima o seu novo salário. Use a instrução switch.
*/

import rl from 'readline-sync'

let salario = rl.questionFloat("Informe seu salário: ");
let cat = rl.question("Informe a categoria de bonificação: ").toUpperCase();
let bonus = 0;

switch (cat) {
    case "A":
        bonus = salario * 0.05
        console.log(`Seu novo salário é de: ${(salario+bonus).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        break;
    case "B":
        bonus = salario * 0.10
        console.log(`Seu novo salário é de: ${(salario+bonus).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        break;
    case "C":
        bonus = salario * 0.15
        console.log(`Seu novo salário é de: ${(salario+bonus).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        break;
    case "D":
        bonus = salario * 0.20
        console.log(`Seu novo salário é de: ${(salario+bonus).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
        break;
    default:
        console.log("   Opção Inválida!!! \n    Pare de ser Burro e digita o que pede. ");
        break;
}

/* 
comando para executar: node "Atividades/Exercício 16 .js"
*/
