function Carro(marca, modelo){
    this.marca = marca,
    this.modelo = modelo
}

let meuCarro = new Carro("Fiat", "Pulse")
console.log(`\n\n${meuCarro.marca}`)
console.log(`${meuCarro.modelo}`)
console.log(`\n\n\n Este Carro é da marca ${meuCarro.marca} e seu modelo é: ${meuCarro.modelo} `)