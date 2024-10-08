import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ViagensModule } from './viagens/viagens.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), ViagensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
