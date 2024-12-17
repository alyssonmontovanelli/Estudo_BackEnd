import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

import { BookDTO } from '../../DTO/books.dto'

@Controller('books')
export class BooksController {

   @Get('get')
   getAllBooks(): string {
      return 'Todos os livros estão aquii';
   }

   @Post()
   saveBook(@Body() newBook: BookDTO): BookDTO { // mudou o tipo, de string para BookDTO
      return newBook
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
