import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Validação dos Schemas
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Para evitar o conflito de endpoints do front com back
  app.enableCors();

  // Antes de executar a rota no controller, passará por essa função
  // para validar os dados seguindo o formato dto
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
