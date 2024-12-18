import { Injectable } from '@nestjs/common';
import {BookDTO} from 'src/DTO/books.dto'
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable() // Injetable diz que a classe pode ser instanciada dentro de outra classe
export class BooksService { 

   constructor(
      private readonly bookRepository : BookRepository
   ){}

   saveBook(newBook: BookDTO): BookDTO {
      console.log('chegou no serviço')
      return newBook
   }
}

