import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({timestamps: true})
export class Transfer extends Document{
    @Prop({ require: true})
    transferId: Number;

    @Prop({require: true})
    sender:string;

    @Prop({require: true})
    addressee:string;

    @Prop({require: true})
    amount:Number;

    @Prop({require: true})
    dateTransfer:Date;

}

export const transferSchema = SchemaFactory.createForClass(Transfer);

transferSchema.index(
    { transferId: 1 },
    {
      name: 'index to improve transferId search query',
    },
  );
  