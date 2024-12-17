import { Param, Body, Controller, Post, Get } from '@nestjs/common';
import Usuario from './usuario.entity'; // Importando Usuario recem criado
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {

   constructor(private repo: UsuarioRepository) {}

   @Post()
   async criar(@Body() usuario: Usuario) {
      const novoUsuario = await this.repo.criar(usuario);
      return novoUsuario;
   }

   @Get()
   async obterTodos() {
      const todosUsuarios = await this.repo.obterTodos();
      return todosUsuarios;
   }

   @Get(':id')
   async obterPorId(@Param('id') id: string) {
      try {
         console.log('id', id)
         const usuarioPorId = await this.repo.obterPorId(+id);
         return usuarioPorId;
      } catch (error) {
         console.error(error);
      }
   }

}
