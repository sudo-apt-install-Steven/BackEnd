/*

Escreva um programa que itere sobre os caracteres de uma
string e imprima cada caractere.


*/



const texto = "\nMonster Hunter World";
// Alternativa usando for...of
for (const char of texto) {
    console.log(char);
}




// Alternativa usando for...in
for (const index in texto) {
    console.log(texto[index]);
}

/*
    comando para executar: node "Atividades/Exercício 24 .js"
*/