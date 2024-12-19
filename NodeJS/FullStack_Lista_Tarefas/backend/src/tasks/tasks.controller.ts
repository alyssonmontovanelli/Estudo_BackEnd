import { 
   Controller, 
   Get, 
   Post, 
   Delete, 
   Put, 
   Body, 
   Param, 
   ConflictException, 
   NotFoundException,
   HttpCode,
} from '@nestjs/common';
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

   @Get(':id') // condicional do erro de não aver task
   async findOne(@Param('id') id:string) {
      const task = await this.tasksService.findOne(id);
      if (!task) throw new NotFoundException(`item com o di ${id} não existe`);
      return task;
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
   }

   // Lógica aqui é eliminar a task e não retornar ela
   // e informar o erro caso tente excluir a msm task novamente
   @Delete(':id')
   @HttpCode(204)
   async delete(@Param('id') id: string) {
      const task = await this.tasksService.delete(id); 
      if (!task) throw new NotFoundException("task not found");
      return task;
   }

   @Put(':id')
   async update(@Param('id') id:string, @Body() body:any) {
      const task = await this.tasksService.update(id, body);
      if (!task) throw new NotFoundException("task not found");
      return task; // se encontrar a task, retorna ela
   }

}
