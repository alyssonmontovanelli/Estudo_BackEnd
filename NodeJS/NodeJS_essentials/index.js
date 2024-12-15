const { Person } = require("./person");
const dotenv = require('dotenv');
const connectToDatabase = require("C:/Estudo_BackEnd/NodeJS/NodeJS_essentials/src/database/connect.js");

dotenv.config();

connectToDatabase();

// // require("./modules/path");
// // require("./modules/http");

require("./modules/express");


// // Nova variável com a classe
// const person = new Person("Alysson")

