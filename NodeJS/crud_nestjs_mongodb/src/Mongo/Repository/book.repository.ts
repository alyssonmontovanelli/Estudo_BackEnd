/// CONEXÃO DO SERVIÇO COM BANCO DE DADOS 

import { Injectable } from "@nestjs/common";
import { BookDTO } from "src/DTO/books.dto";
import { Model } from "mongoose";
import { Book } from "../Interfaces/book.interface";
import { InjectModel } from "@nestjs/mongoose";

// CONVERSA COM O BANCO DE DADOS

@Injectable()
export class BookRepository {

   constructor(
      @InjectModel('book') private readonly bookModel : Model<Book>
   ){}


   saveBook(newBook: BookDTO) {
      const saveBook = new this.bookModel(newBook);
      return saveBook.save()
   }
}