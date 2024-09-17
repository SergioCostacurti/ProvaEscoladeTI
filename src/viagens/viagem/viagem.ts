import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

Schema()
export class Viagem extends Document {
    @Prop()
    nome: string;

    @Prop()
    Datasaida: Date;

    @Prop()
    dataChegada: Date;
}
export const ViagemSchema = SchemaFactory.createForClass(Viagem);