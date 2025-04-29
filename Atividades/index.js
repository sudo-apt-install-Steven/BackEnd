import entradaDados from 'readline-sync';

let nome = entradaDados.question('Qual o seu nome? ');
console.log(`Olá ${nome}, tudo bem?`);
let idade = entradaDados.questionInt('Quantos anos você tem? ');
console.log(`Você tem ${idade} anos.`);
let mes = entradaDados.questionInt('Qual o mês do seu nascimento? (1-12) ');
let anoAtual = new Date().getFullYear();
let anoNascimento = anoAtual - idade;
let anoNascimento2 = anoAtual - (idade + 1)
if (mes < 5) {
    console.log(`Você nasceu no mês de ${mes}.`);
    console.log(`Você nasceu em ${anoNascimento}.`);
}
else {
    console.log(`Você nasceu no mês de ${mes}.`);
    console.log(` Você nasceu em ${anoNascimento2}.`);
};
let cidade = entradaDados.question('Qual a sua cidade atual? ');
console.log(`A sua cidade é ${cidade}.`);
