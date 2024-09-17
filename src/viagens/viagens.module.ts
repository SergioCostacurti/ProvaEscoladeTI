import { Module } from '@nestjs/common';
import { ViagensService } from './viagens.service';
import { ViagensController } from './viagens.controller';
import { Viagem, ViagemSchema } from './viagem/viagem';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [
    MongooseModule.forFeature([
      {
        name: Viagem.name,
        schema: ViagemSchema
      }
    ])
  ],
  exports: [],
  controllers: [ViagensController],
  providers: [ViagensService],
})
export class ViagensModule { }
