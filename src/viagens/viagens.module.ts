import { Module } from '@nestjs/common';
import { ViagensService } from './viagens.service';
import { ViagensController } from './viagens.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Viagem, ViagemSchema } from './entities/viagem.entity';
import { CreateViagenDto } from './dto/create-viagen.dto';

@Module({

  imports: [MongooseModule.forFeature([{ name: Viagem.name, schema: ViagemSchema }])],
  exports: [],
  controllers: [ViagensController],
  providers: [ViagensService],
})
export class ViagensModule { }
