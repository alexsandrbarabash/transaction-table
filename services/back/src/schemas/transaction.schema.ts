import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
  @Prop()
  blockNumber: number;

  @Prop()
  transactionId: string;

  @Prop()
  senderAddress: string;

  @Prop()
  recipientAddress: string;

  @Prop()
  blockConfirmations: string;

  @Prop()
  date: Date;

  @Prop()
  value: string;

  @Prop()
  transactionFee: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
