import express from 'express';
const app = express();

app.get('/', (req, res) => {
    let usuário = "Steven"
    let mensagem = {mensagem: 'Olá! Seja Bem-Vindo ' + usuário + '!'}
    res.send(mensagem);
})

/*
app.get('/', (req, res) => {
    res.json({mensagem: 'Hello World'})
})
*/



app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node Iniciado em: " + Data);
})
