import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ViagemDocument = Viagem & Document

Schema()
export class Viagem extends Document {
    @Prop()
    nome: string;

    @Prop()
    DataSaida: Date;

    @Prop()
    dataChegada: Date;

    @Prop()
    valor: number;
}
export const ViagemSchema = SchemaFactory.createForClass(Viagem);