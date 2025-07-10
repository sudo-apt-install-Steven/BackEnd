/* 
02. Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de
alunos.

O Programa deverá:
Ler o número de alunos da turma;
Ler as notas dos 4 bimestres de cada aluno;
Calcular e imprimir a média do aluno;
Calcular e imprimir a média da turma.

*/

import rl from 'readline-sync'

let alun = rl.questionInt("Digite quantos alunos há nesta turma: ")
let somamd = 0;
let cnt = 1;

while (cnt <= alun) {
    console.log(`aAluno ${cnt}: `);

    let somnts = 0;
    let bim = 1;

    while (bim <= 4) {
        let nota = rl.questionInt(`Informe a nota do ${bim}º Bimestre do ${cnt}º Aluno: `);
        somnts += nota;
        bim++;
    }

    let alunmed = (somnts/4);
    somamd += alunmed;

    console.log(`A média do ${cnt}º aluno será de: ${alunmed.toFixed(2)} `);
    cnt++;
}

let mediaturm = somnts / cnt;
console.log(`Média geral da turma é de: ${mediaturm.toFixed(2)}. `);

/*
    comando para executar: node "Atividades/Exercício 18 .js"
*/

