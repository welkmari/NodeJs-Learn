const express = require('express'); //importa o Express

const app = express(); //Criar o servidor

const port = 3000; //Variavel para armazenar a porta

const usuarios = [
    {"id" : 1 ,"nome": "Maria", "idade": 18, "senha":"12345"},
    {"id" : 2, "nome":"Admin", "idade" : 18, "senha" : "123"}
]

//req - request(requisição)
//res - response(resposta)
app.get("/", (req,res)=>{
    res.send("Primeiro Servidor Desi");

})

//Buscar todos os usuários
app.get("/usuarios" , (req,res) =>{
    //send - Envia dados
    res.send(usuarios);
})

app.listen(port,()=>{
    console.log("Servidor rodando em http://localhost:3000")
})

  