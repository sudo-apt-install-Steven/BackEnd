/* 
02. Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de
alunos. */

import rl from 'readline-sync'

let alun = rl.questionInt("Digite quantos alunos há nesta turma: ")
let bim = 1;
let cnt = 1;
let aluncnt = 0
let mdalun = 0;
let medturm = 0;

while (cnt <= alun) {
    while (bim <= 4) {
        let all = rl.questionInt(`Qual Nota do ${cnt}º Aluno no ${bim}º Bimestre? `);
        mdalun += all;
        bim++;
    }
    console.log(`A média do ${cnt}º aluno, é de: ${mdalun/4}`);
    medturm += mdalun;
    mdalun = 0;
    bim = 1;
    
}

