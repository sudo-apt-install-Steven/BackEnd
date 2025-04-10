/* Calcule o Índice de Massa Corporal (IMC) utilizando variáveis para altura e
peso.*/

let altura = 1.68
let peso = 48

let imc = peso/(altura*altura).toFixed(2);
console.log("Seu IMC é: " + imc);