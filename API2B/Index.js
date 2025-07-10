import express from 'express';
const app = express();
import { efetuarCalculoIMC, retornaStatusIMC } from './servicos/calculadoraIMC.js';


app.get('/', (req, res) => {
    
    let peso = req.query.peso;
    let altura = req.query.altura;
    let imc = efetuarCalculoIMC(peso, altura);
    let status = retornaStatusIMC(imc)

    res.json({imc: imc,status: status})
});


app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node Iniciado em: " + data);
});

