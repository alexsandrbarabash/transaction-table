import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TransactionDocument, Transaction } from '../../../schemas';
import { SearchTransactions } from '../dto';
import { TransactionResponseType } from '../types';

@Injectable()
export class TransactionsServices {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<TransactionDocument>,
  ) {}

  async search(params: SearchTransactions): Promise<TransactionResponseType> {
    const where = structuredClone(params);
    delete where.skip;
    delete where.limit;

    const count = await this.transactionModel.count(where);

    const transactions = await this.transactionModel
      .find(where)
      .skip(params.skip)
      .limit(params.limit);

    return { transactions, count, skip: params.skip, limit: params.limit };
  }
}
