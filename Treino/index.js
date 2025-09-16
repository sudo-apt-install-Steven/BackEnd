import express from "express";
import {
    buscarTodosOsTenis,
    buscarTenisPorId,
    buscarTenisPorNumero,
    buscarTenisPorNome, buscarTenisPorEstilo
} from "./servico/servico.js";

const app = express();



app.get("/tenis", (req, res) => {
    const { nome, estilo } = req.query;

    let resultado = buscarTodosOsTenis();

    if (nome) {
    resultado = buscarTenisPorNome(nome);
    }

    if (estilo) {
    resultado = buscarTenisPorEstilo(estilo);
    }

    if (resultado.length > 0) {
    res.json(resultado);
    } else {
    res.status(404).send({ erro: "Nenhum tênis encontrado com os critérios fornecidos." });
    }
});



app.get("/tenis/:id", (req, res) => {
    const id = req.params.id;
    const idNumerico = parseInt(id);

    if (isNaN(idNumerico)) {
    return res.status(400).json({ erro: "Requisição inválida. O ID deve ser um número." });
    }

    const tenis = buscarTenisPorId(idNumerico);

    if (tenis) {
        res.json(tenis);
    } else {
        res.status(404).json({ erro: "Tênis não encontrado." });
    }
});




app.get("/tenis/numero/:numero", (req, res) => {
    const numero = req.params.numero;
    const numeroNumerico = parseInt(numero);

    if (isNaN(numeroNumerico)) {
        return res.status(400).json({ erro: "Requisição inválida. O número do tênis deve ser um valor numérico.",});
    }

    const resultado = buscarTenisPorNumero(numeroNumerico);

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({ erro: "Nenhum tênis encontrado para este número." });
    }
});

app.listen(8080, () => {
    const data = new Date();
    console.log(`Servidor da API de Tênis iniciado na porta 8080 em: ${data}`);
});
