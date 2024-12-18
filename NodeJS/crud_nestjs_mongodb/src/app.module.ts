import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books/books.controller';
import { BooksService } from './Services/books/books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookRepository } from './Mongo/Repository/book.repository';
import { BookSchema } from './Mongo/Schemas/book.schemas';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/biblioteca"),

    MongooseModule.forFeature([
      { name : 'book', schema : BookSchema}
    ])
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository]
})
export class AppModule {}
3000