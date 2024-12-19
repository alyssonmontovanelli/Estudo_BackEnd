import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/schemas/tasks.schemas';
import { Model } from 'mongoose';

// DTO
import { CreateTaskDto } from '../dto/create-task.dto'
import { UpdateTaskDto } from '../dto/update-task.dto'


@Injectable()
export class TasksService {

   constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

   findAll() {
      this.taskModel.find();
   }

   // Joga o create DTO aqui
   async create(createTask: CreateTaskDto) {
      const newTask = new this.taskModel(createTask); //Cria
      return newTask.save(); //Guarda
   }

   async findOne(id: string) {
      return this.taskModel.findById(id)
   }

   async delete(id: string) {
      return this.taskModel.findByIdAndDelete(id)
   }

   async update(id: string, task: UpdateTaskDto) {
      return this.taskModel.findByIdAndUpdate(id, task)
   }

}
