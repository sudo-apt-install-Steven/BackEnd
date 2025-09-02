import colecaoUf from './dados/dados.js'
import express from 'express'; // metodo novo

const app = express();

const buscarUfsporNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()))
};

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsporNome(nomeUf) : colecaoUf;
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma Uf encontrada" });
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    const uf = colecaoUf.find(item => item.id === idUF);
    res.json(uf);
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = "";
    let uf;
    if (!(isNaN(idUF))) {
        uf = colecaoUf.find(item => item.id === idUF);
        if (!uf) {
            mensagemErro = "UF não encontrada";
        }
    } else {
        mensagemErro = "Requisição inválida"
    }

    if (uf) {
        res.json(uf)
    } else {
        res.status(404).json({ "erro": mensagemErro });
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor Iniciado na porta 8080 em: ' + data);
});





