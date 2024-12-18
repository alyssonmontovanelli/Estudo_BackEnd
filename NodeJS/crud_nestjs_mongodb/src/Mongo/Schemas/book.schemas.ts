import { Schema } from "mongoose";
import { authorSchema } from "./author.schema";

export const BookSchema = new Schema({
   name: String,
   author: [authorSchema],
   language: String,
   releaseYear: Number,
   publisher: String,
   pages: Number
})