import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`✅ Servidor rodando na porta http://localhost:${port}`);
  console.log(`✅ Banco de dados conectado com sucesso!`);
}
bootstrap();
