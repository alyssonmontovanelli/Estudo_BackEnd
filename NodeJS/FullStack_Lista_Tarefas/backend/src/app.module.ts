import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

// MONGODB
import { MongooseModule } from '@nestjs/mongoose' 


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/tasksdb'),
    TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
