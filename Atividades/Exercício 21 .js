/*

02. Crie um algoritmo leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o
valor de imposto de renda a ser pago.
Calcule o total de Imposto de Renda a ser pago conforme a tabela abaixo:
Salário <= R$ 2.100,00 = isento
Salário <= R$ 2.800,00 = 7,5%
Salário <= R$ 3.750,00 = 15%
Salário <= R$ 4.660,00 = 22.5%
Salário > R$ 4.660,00 = 27.5%

*/


import rl from 'readline-sync';

for (let i = 1; i < 10; i++) {
    let nom = rl.question(`Informe o nome da ${i}ª Pessoa: `);
    let salario = rl.question(`Informe o salario de ${nom}: `);
    
    let ir = 0;
    if (salario <= 2100) {
        ir = 0;
    }
    else if (salario <= 2800) {
        ir = salario * 0.075;
    }
    else if (salario <= 3750) {
        ir = salario * 0.15;
    }
    else if (salario <= 4600) {
        ir = salario * 0.225;
    }
    else {
        ir = salario * 0.275;
    }

    console.log(`\n         ---Imposto de Renda Devido---           `);
    console.log(`\n\n\n         Nome: ${nom} \n         Imposto de randa: R$ ${ir.toFixed(2)}\n\n\n`)
}


/*

comando para executar:          node "Atividades/Exercício 21 .js"

*/