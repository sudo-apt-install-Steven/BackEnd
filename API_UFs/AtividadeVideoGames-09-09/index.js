import colecaogenero from './dados/dados.js'
import express from 'express'; // metodo novo
import { buscarUfsporGenero, buscarUfPorId, buscarUfsporPlataforma } from './servico/servico.js';

const app = express();

const buscarUfsporGenero = (generoUf) => {
    return colecaoUf.filter(uf => uf.genero.toLowerCase().includes(generoUf.toLowerCase()));
};

app.get('/ufs', (req, res) => {
    const generoUf = req.query.busca;
    const resultado = generoUf ? buscarUfsporGenero(generoUf) : colecaogenero;
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma Uf encontrada" });
    }
});

app.get('/ufs/plataforma/:plataformauf', (req, res) => {
    const plataformaUf = req.params.plataformaUf;
    const uf = buscarUfsporPlataforma(plataformaUf);

    if (uf) {
        res.json(uf)
    } else {
        res.status(404).json({ "erro": "Uf não Encontrada" })
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    const uf = colecaogenero.find(item => item.id === idUF);
    res.json(uf);
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = "";
    let uf;
    if (!(isNaN(idUF))) {
        uf = colecaogenero.find(item => item.id === idUF);
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





