// CRIAÇÃO DOS ERVIDOR DE FORMA NATIVA

const http = require('http');

// Definidno uma porta 
const port = 8080;

// Construindo servidor (requisição - Resposta)
const server = http.createServer((req, res) => {
   if (req.url == "/home") {
      res.writeHead(200, { "Content-Type": "text/html"}); 
      res.end("<h1>Página inicial - NODEZADA</h1>");
   };

   if (req.url == "/users") {
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

      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(JSON.stringify(users));
   }
});

// Colocando server online
server.listen(port, () => console.log(`Rodando na porta ${port}!`));