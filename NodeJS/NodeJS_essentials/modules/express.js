const express = require('express')

// ---- INICIALIZANDO O EXPRESS
const app = express()

app.get("/home", (req, res) =>{
   res.status(200).send("<h1>Home - Utilizando ExpressJS</h1>");
});

// rota de usuarios
app.get("/users", (req, res) =>{
   const users = [
      {
         name: "Alysson Melo",
         email: "alysson@gmail.com",
      },
      {
         name: "Vitória Magalhães",
         email: "vimagalhaes@gmail.com",
      },
   ];

   res.status(200).json(users);
});


// ----- INICIALIZANDO O SERVIDOR

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));