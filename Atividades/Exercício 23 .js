/*

Escreva um programa que itere sobre os elementos de um
array e imprima seus valores.

*/


const numeros = [1, 2, 3, 4, 5];

// Alternativa usando for...of
for (const numero of numeros) {
    console.log(numero);
}



// Alternativa usando for...in

for (const index in numeros) {
    console.log(numeros[index]);
}



/*
    comando para executar: node "Atividades/Exercício 23 .js"
*/