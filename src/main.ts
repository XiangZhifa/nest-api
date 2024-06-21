import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置swagger文档
  const config = new DocumentBuilder()
    .setTitle('nest-api')
    .setDescription('基于NestJS的后端接口')
    .setVersion('1.0')
    .addTag('nest-api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}

bootstrap();
