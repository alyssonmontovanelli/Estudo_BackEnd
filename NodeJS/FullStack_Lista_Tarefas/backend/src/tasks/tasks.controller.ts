import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'src/schemas/tasks.schemas';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Controller('tasks')
export class TasksController {

   constructor(private tasksService: TasksService) {}

   @Get()
   findAll(){
      return this.tasksService.findAll();
   }

   @Get(':id') 
   findOne(@Param('id') id:string) {
      console.log(id)
      return this.tasksService.findOne(id)
   }

   @Post()
   async create(@Body() body: CreateTaskDto) {
      try {
         return await this.tasksService.create(body);
      } catch (error) {
         if (error.code == 11000) {
            throw new ConflictException('Tasks already exists');
         }
         throw error;
      }
      console.log(body)
      
   }

   @Delete(':id')
   delete(@Param('id') id: string) {
      console.log(id);
      return this.tasksService.delete(id);
   }

   @Put(':id')
   update(@Param('id') id:string, @Body() body:any) {
      console.log(id, body)
      return this.tasksService.update(id, body);
   }

}
