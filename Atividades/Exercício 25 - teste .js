import rl from 'readline-sync';



function square(num, numm) {
    return num * numm
}

let rs = 0;
let srr = 0;
let sla;


do {
    rs += rl.questionInt("\n                   Digite o Primeiro Número: ");
    srr += rl.questionInt("\n                   Digite o Segundo Número: ");
    let resultado = square(rs, srr);
    console.log(`\n\n                   ${rs} X ${srr} = ${resultado} \n\n\n`)
    rs = 0;
    srr = 0;
    sla = rl.question("Você deseja terminanr por aqui? ('s' ou 'n') ").toLowerCase()
} while (sla !== "s");

/*

comando para executar:          node "Atividades/Exercício 25 - teste .js"

*/