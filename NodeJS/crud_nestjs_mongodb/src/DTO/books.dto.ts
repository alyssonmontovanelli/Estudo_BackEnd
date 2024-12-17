
// UTILIZANDO VALIDAÇÕES AGORA

import { ArrayMinSize, IsNotEmpty, IsNotEmptyObject, IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

import { Type } from "class-transformer";

import { AuthorDTO } from "./author.dto"
// SCHEMA do dado
export class BookDTO {

   @IsNotEmpty()
   @IsString()
   @MinLength(2)
   @MaxLength(100)
   readonly name: String;

   @IsNotEmpty()
   @Type(() => AuthorDTO)
   @ArrayMinSize(1)
   // @IsNotEmptyObject({ each : true})
   readonly author: AuthorDTO[]; // author será do tipo AuthorDTO

   @IsNotEmpty()
   @IsString()
   @MinLength(2)
   @MaxLength(100)
   readonly language: String;

   @IsNotEmpty()
   @IsNumber()
   @IsPositive()
   readonly releaseYear: Number;

   @IsNotEmpty()
   @IsString()
   @MinLength(2)
   @MaxLength(100)
   readonly publisher: String;

   @IsNotEmpty()
   @IsNumber()
   @IsPositive()
   readonly pages: Number;
  
}