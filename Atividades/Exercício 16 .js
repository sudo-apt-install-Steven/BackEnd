/* 4. Um funcionário irá receber um aumento de acordo com o seu
categoria de bonificação (A,B,C e D).
A tabela abaixo mostra o percentual de aumento de cada
categoria:
Faça um programa que leia a categoria de bonificação e o
salário atual de um funcionário, em seguida calcule e
imprima o seu novo salário. Use a instrução switch.
*/

let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a categoria de bonificação (A, B, C ou D): ', (categoria) => {
    rl.question('Digite o salário atual: ', (salario) => {
        let salarioAtual = parseFloat(salario);
        let novoSalario;
        let percentual;

        switch(categoria.toUpperCase()) {
            case 'A':
                percentual = 5;
                novoSalario = salarioAtual * (1 + percentual/100);
                break;
            case 'B':
                percentual = 10;
                novoSalario = salarioAtual * (1 + percentual/100);
                break;
            case 'C':
                percentual = 15;
                novoSalario = salarioAtual * (1 + percentual/100);
                break;
            case 'D':
                percentual = 20;
                novoSalario = salarioAtual * (1 + percentual/100);
                break;
            default:
                console.log("Categoria inválida! Use A, B, C ou D");
                rl.close();
                return;
        }

        console.log(`Categoria: ${categoria.toUpperCase()}`);
        console.log(`Percentual de aumento: ${percentual}%`);
        console.log(`Salário atual: R$ ${salarioAtual.toFixed(2)}`);
        console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
        
        rl.close();
    });
});

/* 
comando para executar: node "atividades BackEnd/Exercício 16 .js"
*/
