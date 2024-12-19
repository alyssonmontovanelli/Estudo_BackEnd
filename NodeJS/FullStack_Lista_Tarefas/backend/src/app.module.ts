import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

// MONGODB
import { MongooseModule } from '@nestjs/mongoose' 


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tasksdb'),
    TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
