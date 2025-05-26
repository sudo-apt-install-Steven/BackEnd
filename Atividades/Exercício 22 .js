/* 

Escreva um programa que itere sobre as propriedades
de um objeto e imprima suas chaves e valores.

*/



const pessoa = {
    nome: "Carlos Eduardo dos Santos",
    dtNasc: "22/02/2002",
    cpf: "88234512045",
    sexo: "M"
}


for (const key in pessoa) {
    console.log(`${key}: ${pessoa[key]}`);
}

const cores = ["Branco ", "Azul ", "Verde ", "Preto ", "Roxo ", "Amarelo "];

let valores = " ";

for (const elemento of cores) {
    valores += elemento;
}

console.log(valores);

/*
    comando para executar: node "Atividades/Exercício 22 .js"
*/
