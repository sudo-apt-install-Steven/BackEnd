import entradaDados from 'readline-sync';

let nome = entradaDados.question('Qual o seu nome? ');
console.log(`Olá ${nome}, tudo bem?`);