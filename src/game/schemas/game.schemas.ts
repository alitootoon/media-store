import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({timestamps: true})
export class Game extends Document {
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    brand : string;

    @Prop()
    ganre: string;

    @Prop({ required: true })
    price: number;

    @Prop({ default: 0 })
    stock: number;

    @Prop()
    description: string;
}