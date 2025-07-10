import express, { json } from 'express';
const app = express();
import { efetuarCalculoIMC, retornaStatusIMC, validaParametro } from './servicos/calculadoraIMC.js';


app.get('/', (req, res) => {
    
    let peso = req.query.peso;
    let altura = req.query.altura;

    if(validaParametro(peso) && validaParametro(altura))
    {
        let imc = efetuarCalculoIMC(peso, altura);
        let status = retornaStatusIMC(imc);

        let json = {imc: imc,status: status};


        res.json(json);
    }

    else
    {
        res.status(400).json({'ERRO':'Valor de Peso ou Altura Inválidos! '});
    }

    
    
});


app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node Iniciado em: " + data);
});

