// Boas práticas - Class validator 
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';


export class UpdateTaskDto {
   @IsString()
   @IsOptional()
   title?: string;

   @IsString()
   @IsOptional()
   description?: string;

   @IsBoolean()
   @IsOptional()
   done?: boolean;
}

// ? é opcional, ou seja, qualquer campo pode ser atualziado