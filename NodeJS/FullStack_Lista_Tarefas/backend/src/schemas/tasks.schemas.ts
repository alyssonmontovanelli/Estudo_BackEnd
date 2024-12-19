
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"

// Schemas para armazenamento no mongoDB
@Schema({
   timestamps: true
})

export class Task {

   @Prop({
      unique: true,
      required: true,
      trim: true // para elminar os espaços antes e depois do texto
   })
   title: string;

   @Prop({
      trim: true
   })
   description: string;

   @Prop({
      default:false
   })
   done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task)