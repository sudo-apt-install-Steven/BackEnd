function Carro(marca, modelo, cor, ano, origem){
    this.marca = marca,
    this.modelo = modelo
    this.cor = cor
    this.ano = ano
    this.origem = origem
}

let meuCarro = new Carro("Fiat", "Pulse", "Azul", "2021", "Brasil")
console.log(`\n\n${meuCarro.marca}, ${meuCarro.modelo}, ${meuCarro.cor}, ${meuCarro.ano}.`)
console.log(`\n\n\n Este Carro é da marca ${meuCarro.marca} e seu modelo é: ${meuCarro.modelo} e sua cor é ${meuCarro.cor} e seu ano é de ${meuCarro.ano} portanto sua origem é do ${meuCarro.origem}.`)

/*
const Carro = {
    cor : "azul"
    "a cor" : "azul"
}
*/


class personagem {
    constructor(classe, origemm, endereco) {
        this.classe = classe;
        this.origemm = origemm;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        return `uma Pessoa de classe (poder aquisitivo): ${this.classe}, sua nacionalidade é: ${this.origemm}, e seu endereço é: ${this.endereco}. `;
    }
}

let pessoa2 = new personagem("Rico", "Brasileiro", "Rua da Amizade, 789 - Bairro Alegre");
let pessoa1 = new personagem("Pobre", "Boliviano", "Avenida da Paz, 123 - Centro");

console.log(`uma Pessoa de classe (poder aquisitivo): ${pessoa1.classe}, sua nacionalidade é: ${pessoa1.origemm}, e seu endereço é: ${pessoa1.endereco}. `)
