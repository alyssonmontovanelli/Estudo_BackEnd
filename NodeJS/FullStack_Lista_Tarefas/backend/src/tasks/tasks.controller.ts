import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
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
   create(@Body() body: CreateTaskDto) {
      console.log(body)
      return this.tasksService.create(body);
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
