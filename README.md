# api-tarefas-node-sem-banco-de-dados-
API REST simples de gerenciamento de tarefas (CRUD) desenvolvida com Node.js e Express.

Este projeto é uma API REST simples desenvolvida com Node.js e Express, com o objetivo de praticar conceitos fundamentais de back-end como criação de rotas, manipulação de dados e operações CRUD.

🚀 Tecnologias utilizadas
Node.js
Express
JavaScript
📂 Funcionalidades

A API permite:

Listar todas as tarefas
Criar uma nova tarefa
Atualizar uma tarefa existente
Deletar uma tarefa
Estrutura do projeto
   projeto
    index.js
    package.json
    .gitignore
Como executar o projeto
1. Clone o repositório
git clone https://github.com/leuzitobr/api-tarefas-node-sem-banco-de-dados-
2. Acesse a pasta
cd api-tarefas-node-sem-banco-de-dados-
3. Instale as dependências
npm install
4. Execute o servidor
node index.js

O servidor irá rodar em:

http://localhost:3000
Endpoints
 Listar tarefas
    GET /tarefas
 Criar tarefa
    POST /tarefas

  Body (JSON):

  {
    "titulo": "Nova tarefa"
  }
 Atualizar tarefa
    PUT /tarefas/:id

  Body (JSON):

  {
    "titulo": "Tarefa atualizada"
  }
 Deletar tarefa
    DELETE /tarefas/:id
 Observações
Os dados são armazenados em memória (array), ou seja, são perdidos ao reiniciar o servidor.
Este projeto tem fins educacionais e de prática.
Objetivo

Este projeto foi desenvolvido com foco em aprendizado prático de desenvolvimento back-end e construção de portfólio.

👨‍💻 Autor

Desenvolvido por Léo
