import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

import { BookDTO } from '../../DTO/books.dto'
import { BooksService } from 'src/Services/books/books.service';

@Controller('books')
export class BooksController {

   constructor(
      private readonly bookService : BooksService
   ){
   }

   @Get('get')
   getAllBooks(): string {
      return 'Todos os livros estão aquii';
   }

   @Post()
   saveBook(@Body() newBook: BookDTO): BookDTO { // mudou o tipo, de string para BookDTO
      return this.bookService.saveBook(newBook)
   }

   @Patch()
   atualizaBook(): string {
      return 'Livro Atualizado'
   }

   @Delete()
   deleteBook(): string {
      return 'Livro deletado'
   }
   
}
