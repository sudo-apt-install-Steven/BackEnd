let valor = 3.141516; // variável.
let text = "Meu primeiro projeto em JavaScript. "; // variável.
let booleano = true; // variável.

console.log(valor.toFixed(2)); // arredonda o valor para 2 casas decimais antes da vírgula.
console.log("Tipo: " + typeof valor); // Retorna o tipo da variável.
console.log(text.toUpperCase()); // converte o texto para maiúesculas "console.log(text.toLowerCase());" seria para deixar minúsculas.
console.log("Tipo: " + typeof text); // Retorna o tipo da variável.
console.log(booleano.toString()); // Converte para texto.
console.log("Tipo: " + typeof booleano); // Retorna o tipo da variável.

let estados = ["São Paulo", "Minas Gerais", "Rondônia", "Jurassic World", "Acre", "Amazon", "mercado livre"]; // cria um array (lista) com valores definidos.
let marcasCarros = []; // criar um array (lista) infinito, ou seja vai adicionando itens sem limitação.
marcasCarros.push("Chevrolet", "Toyota", "Ford", "BMW", "Lenovo")
console.log(estados[0,6]); // ver o item 0,6 do array (lista) estados.
console.log("Tamanho: " + estados.length); // ver o tamnho do array (lista).
console.log(marcasCarros[0,2]) // ver o item na posição [0,2] (0,2 seria de trás para frente).
console.log("Total Letras: " + marcasCarros[0,2].length); // ver o tanto de letras no item da posição 0,2.

