// Imports
const express = require('express')
const UserModel = require("C:/Estudo_BackEnd/NodeJS/NodeJS_essentials/src/models/user.models.js")

// ---- INICIALIZANDO O EXPRESS
const app = express()

// DIZENDO Q SEMPRE SERÁ UTILIZADO JSON nas REQUISIÇÕES
app.use(express.json())

// app.get("/home", (req, res) =>{
//    res.status(200).send("<h1>Home - Utilizando ExpressJS</h1>");
// });

// // rota de usuarios
// app.get("/users", (req, res) =>{
//    const users = [
//       {
//          name: "Alysson Melo",
//          email: "alysson@gmail.com",
//       },
//       {
//          name: "Vitória Magalhães",
//          email: "vimagalhaes@gmail.com",
//       },
//    ];

//    res.status(200).json(users);
// });

// ------- ENDPOINT BUSCANDO USUARIO POR ID
app.get("/users/:id", async (req, res) => {
   try{
      const id = req.params.id;

      // Para puxar usuario no banco:
      const user = await UserModel.findById(id);

      return res.status(200).json(user)
   } catch (error) {
      return res.status(500).send(error.message);
   };
})


// -------- ENDPOINT QUE PEGA O USUÁRIO CRIADO NO MONGODB
app.get("/users", async (req, res) => {
   try{
      const users = await UserModel.find({})
      res.status(200).json(users)
   } catch (error) {
      return res.status(500).send(error.message)
   }
});

// ------ CRIANDO USUÁRIO COM POST 

app.post("/users", async (req, res) => {
   try {
      const user = await UserModel.create(req.body)

      res.status(201).json(user)
   }
   catch (error) {
      res.status(500).send(error.message);
   }
});


// ----- INICIALIZANDO O SERVIDOR

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));