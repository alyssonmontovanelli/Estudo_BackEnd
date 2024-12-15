// ARQUITETANDO SCHEMA DENTRO DO MONGODB - ESTRUTURA DO DOCUMENTO

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
   firstName: {
      type: String,
      required: true, // dado obrigatório, se não tiver, não salvará no DB
   },
   lastName: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   }, 
   password: {
      type: String,
      required: true,
      minlength: 7,
   },
});

// CRIANDO O MODEL EM SI 

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel;

