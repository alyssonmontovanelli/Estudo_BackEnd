// --- LÓGICA DE PROGRAMAÇÃO PARA LER OS SCHEMAS 

import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Book extends Document {

   readonly _id: mongoose.Schema.Types.ObjectId; // ID automático na consulta
   readonly name: String,
   readonly author: object,
   readonly language: String,
   readonly releaseYear: Number,
   readonly publisher: String,
   readonly pages: Number
}


