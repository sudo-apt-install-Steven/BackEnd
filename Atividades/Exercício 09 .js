/* 1. Crie a variável apartamento e atribua a ela um objeto literal com as
seguintes propriedades:
▪quartos = 2
▪ tipo = “apartamento”
▪ endereco = “Avenida Principal, 456 - Centro”
▪andar: 7
Em seguida, exiba no console a seguinte frase, utilizando todas as
propriedades da variável casa: "Apartamento com 2 quartos, localizado no 7º
andar da Av. Principal, 456 - Centro.". */


let apartamento = {
    quartos: 2,
    tipo: "apartamento",
    endereco: "Avenida Principal, 456 - Centro",
    andar: 7
};

console.log(`Apartamento com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereco}.`);

