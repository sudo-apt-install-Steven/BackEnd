import express from 'express';
import pool from './servicos/conexao.js';
import { retornaCampeonatos, retornaCampeonatosPorID, retornaCampeonatosPorAno} from './servicos/retornaCampeonatos_servico.js';
const app = express();


const porta = 9090;

app.get('/campeonatos', async(req, res) => {
    let campeonato;
    const ano = req.query.ano;

    const anoInvalido = typeof ano === 'undefined' || ano === '';
    
    if(anoInvalido) {
        campeonato = await retornaCampeonatos();
    } else if (!anoInvalido) {
        if (!isNaN(ano)){
            campeonato = await retornaCampeonatosPorAno(ano);
        } else {
            res.status(400).json({ mensagem: "Ano inválido." });
        }
    }
    
    
    if (campeonato.length > 0) {
        res.json(campeonato);
    } else {
        res.status(404).json({ mensagem: "Campeonatos não encontrados." });
    }

    


})

app.get('/campeonatos/:id', async(req, res) => {
    let campeonatos;
    const id = parseInt(req.params.id);
    if(!isNaN(id)) {
        campeonatos = await retornaCampeonatosPorID(id);
    } else {
        res.status(400).json({ mensagem: "ID inválido." });
    }
    

    if (campeonatos.length > 0) {
        res.json(campeonatos);
    } else {
        res.status(404).json({ mensagem: "Campeonato não encontrado." });
    }

})







app.listen(porta, async() => {
    const data = new Date();
    console.log(`Servidor Iniciado em ${data} na porta ${porta}.`);

    const conexao = await pool.getConnection();

    console.log(conexao.threadId);

    conexao.release(); 
});

export default app;







