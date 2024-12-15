// CONECTANDO AO BANCO DE DADOS
// Como SQLAlquemy

const mongoose = require("mongoose")

//  função para fazer conexão ao MONGODB
const connectToDatabase = async () => {
   try {
      await mongoose.connect(
         `mongodb+srv://alyssonmontovanelli:${process.env.MONGODB_PASSWORD}@nodejsessentials.dbs4r.mongodb.net/?retryWrites=true&w=majority&appName=NodeJSEssentials`
      );
      console.log("Conexão ao banco de dados realizada com sucesso!");
   } catch (error) {
      console.error(`Ocorreu um erro ao conectar ao banco de dados: ${error.message}`);
   }
};

module.exports = connectToDatabase;

