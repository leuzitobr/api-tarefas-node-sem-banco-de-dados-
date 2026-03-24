import express from 'express';


const app = express();
const port = 3000;
app.use(express.json());


let tarefas = [
    {id: 1, titulo: 'Estudar JavaScript'},
    {id:2, titulo:'Fazer exercicios de lógica'}
];


app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});


app.post('/tarefas', (req, res) => {
    const novaTarefa = req.body; // Lê o corpo da requisição
    novaTarefa.id = tarefas.length + 1; // Cria um id incremental
    tarefas.push(novaTarefa); // Adicionar a nova tarefa no array
    res.status(201).json(novaTarefa); // Reforma a nova tarefa com status 201 (criado)
});


app.put('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id); // lê o id da URL
    const index = tarefas.findIndex(t => t.id === id); // Encontra a posiçao da tarefa no array)
    if (index !== -1){
        tarefas[index] = {id, ...req.body}; // Substitui os dados antigos pelos novos
        res.json(tarefas[index]); // Retorna a tarefa atualizada
    }
    else {
        res.status(404).json({mensagem:'Tarefa não encontrada'}); // Caso o id não exista  
    }
});


app.delete('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id); // Lê o id da URL
    tarefas = tarefas.filter(t => t.id !== id); // Remove a tarefa com aquele id
    res.json({mensagem: 'Tarefa removida com sucesso'}); // Continua a exclusão
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});