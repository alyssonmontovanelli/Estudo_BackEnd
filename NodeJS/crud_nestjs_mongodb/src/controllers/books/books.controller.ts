import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {

   @Get()
   getAllBooks(): string {
      return 'Todos os livros estão aquii';
   }

   @Post()
   saveBook(@Body() newBook: string): string {
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
