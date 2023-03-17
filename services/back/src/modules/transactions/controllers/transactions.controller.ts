import { Controller, Get, Query } from '@nestjs/common';

import { TransactionsServices } from '../services';
import { SearchTransactions } from '../dto';
import { TransactionResponseType } from '../types';

@Controller('/transaction')
export class TransactionController {
  constructor(private readonly transactionsServices: TransactionsServices) {}

  @Get('/')
  public async getTransactionsList(
    @Query() params: SearchTransactions,
  ): Promise<TransactionResponseType> {
    return this.transactionsServices.search(params);
  }
}
