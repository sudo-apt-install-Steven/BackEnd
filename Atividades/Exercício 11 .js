/*
3. Crie uma classe chamada Imovel com os seguintes atributos:
▪ quartos:
▪ tipo:
▪ endereco:
Crie um método na classe chamado exibirInformacoes que
retorna uma string com as informações do imóvel.
Em seguida, instancie dois objetos da classe Imovel
representando uma casa e um apartamento com as seguintes
características:
Casa:
▪ Quartos: 4
▪ Tipo: "Casa"
▪ Endereço: "Rua da Amizade, 789 - Bairro Alegre"
Apartamento:
▪ Quartos: 2
▪ Tipo: "Apartamento"
▪ Endereço: "Avenida da Paz, 123 - Centro"
Chame o método exibirInformacoes para cada instância e exiba o
resultado no console.
*/

class Imovel {
    constructor(quartos, tipo, endereco) {
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        return `Imóvel com ${this.quartos} quartos, tipo ${this.tipo}, localizado no ${this.endereco}.`;
    }
}

let casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
let apartamento = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");


