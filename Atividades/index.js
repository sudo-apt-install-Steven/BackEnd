import entradaDados from 'readline-sync';

let nome = entradaDados.question('Qual o seu nome? ');
console.log(`Olá ${nome}, tudo bem?`);
let idade = entradaDados.questionInt('Quantos anos você tem? ');
console.log(`Você tem ${idade} anos.`);
let mes = entradaDados.questionInt('Qual o mês do seu nascimento? (1-12) ');
let anoAtual = new Date().getFullYear();
let anoNascimento = anoAtual - idd;
let idd = 0;
if (mes < 5) {
    let idd = (idade - 1);
    let anoNascimento = anoAtual - idd;
    console.log(`Você nasceu em ${anoNascimento}.`);
}
else {
    console.log(`Você nasceu no mês de ${mes}.`);
    let anoNascimento = anoAtual - idade;
    console.log(` Você nasceu em ${anoNascimento}.`);
};


console.log(`Você nasceu em ${anoNascimento}.`);
let cidade = entradaDados.question('Qual a sua cidade atual? ');
console.log(`A sua cidade é ${cidade}.`);

