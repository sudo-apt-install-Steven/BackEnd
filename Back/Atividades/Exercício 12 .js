/*
4. Crie uma classe chamada Veiculo com os seguintes atributos:
▪ marca
▪ modelo
▪ ano
Crie um método na classe chamado exibirDetalhes que retorna
uma string com as informações do veículo.
Em seguida, instancie dois objetos da classe Veiculo
representando um carro e uma motocicleta com as seguintes
características:
Carro:
▪ Marca: "Toyota"
▪ Modelo: "Corolla"
▪ Ano: 2022
Motocicleta:
▪ Marca: "Honda"
▪ Modelo: "CBR 600RR"
▪ Ano: 2021
Chame o método exibirDetalhes para cada instância e exiba o
resultado no console.
*/

class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `Veículo: ${this.marca} ${this.modelo} ${this.ano}`;
    }
}

let carro = new Veiculo("Toyota", "Corolla", 2022);
let motocicleta = new Veiculo("Honda", "CBR 600RR", 2021);

console.log(carro.exibirDetalhes());
console.log(motocicleta.exibirDetalhes());



