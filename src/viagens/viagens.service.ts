import { Injectable } from '@nestjs/common';
import { CreateViagenDto } from './dto/create-viagen.dto';
import { UpdateViagenDto } from './dto/update-viagen.dto';
import { Viagem, ViagemDocument } from './entities/viagem.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class ViagensService {

  constructor(@InjectModel(Viagem.name) private viagemModel: Model<ViagemDocument>) { }


  create(createViagenDto: CreateViagenDto) {
    const viagem = new this.viagemModel(createViagenDto)
    return viagem.save();
  }

  findAll() {
    return this.viagemModel.find();
  }

  findOne(id: string) {
    return this.viagemModel.findById;
  }

  update(id: string, updateViagenDto: UpdateViagenDto) {
    return this.viagemModel.findByIdAndUpdate({
      _id: id
    }, {
      updateViagenDto,
    }, {
      new: true
    });
  }

  remove(id: string) {
    return this.viagemModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}