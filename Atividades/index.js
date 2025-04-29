import entradaDados from 'readline-sync';

let nome = entradaDados.question('Qual o seu nome? ');
console.log(`Olá ${nome}, tudo bem?`);
let idade = entradaDados.questionInt('Quantos anos você tem? ');
console.log(`Você tem ${idade} anos.`);
let anoAtual = new Date().getFullYear();
let anoNascimento = anoAtual - idade;
console.log(`Você nasceu em ${anoNascimento}.`);
let cor = entradaDados.question('Qual a sua cor favorita? ');
console.log(`A sua cor favorita é ${cor}.`);
let animal = entradaDados.question('Qual o seu animal favorito? ');
console.log(`O seu animal favorito é ${animal}.`);
let cidade = entradaDados.question('Qual a sua cidade? ');
console.log(`A sua cidade é ${cidade}.`);