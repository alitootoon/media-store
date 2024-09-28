import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export  class Book extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    author: string;

    @Prop({ required: true, unique: true })
    isbn: string;

    @Prop()
    publishedDate: Date;

    @Prop({ required: true })
    price: number;

    @Prop({ default: 0 })
    stock: number;

    @Prop()
    description: string;
}