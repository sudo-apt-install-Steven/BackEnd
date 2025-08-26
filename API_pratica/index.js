import colecaoUf from './dados/dados.js'
import express from 'express';

const app = express();

app.get('/Dinossauros', (req, res) => {
    res.json(colecaoUf);
});


app.get('/Dinossauros/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = "";
    let coisa;
    if (!(isNaN(idUF))) {
        coisa = colecaoUf.find(dino => dino.id === idUF);
        if (!coisa) {
            mensagemErro = "UF não encontrada!"
        }
    } else {
        mensagemErro = "Requisição Inválida!"
    }

    if (coisa) {
        res.json(coisa)
    } else {
        res.status(404).json({ "erro": mensagemErro });
    }
});


app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor Iniciado na porta 8080 em: ' + data);
});