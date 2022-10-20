import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - Anelise e Bárbara')
    .setDescription(
      'RUNMAZING - SITE PARA PARCERIA DE ATIVIDADE FÍSICA. O Swagger (aka OpenApi) é uma biblioteca muito conhecida no universo backend, estando disponível para diversas linguagens e frameworks. Ela gera um site interno no seu backend que descreve, com muitos detalhes, cada endpoint e estrutura de entidades presentes na sua aplicação.',
    )
    .setVersion('1.0')
    .addTag('usuario')
    .addTag('instrutor')
    .addTag('endereco')
    .addTag('local-treinamento')
    .addTag('exercicio')
    .addTag('preferencia')
    .addTag('preferencia-exercicio')
    .addTag('instrutor-endereco')
    .addTag('usuario-endereco')
    .addTag('usuario-preferencia')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
