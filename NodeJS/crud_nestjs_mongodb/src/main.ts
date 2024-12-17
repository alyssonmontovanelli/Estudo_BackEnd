import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,                 // Remove propriedades não definidas no DTO
      forbidNonWhitelisted: true,      // Lança erro se houver propriedades não permitidas
      transform: true,                 // Transforma os dados para o tipo esperado
    }),
  );  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
