import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TransactionController } from './controllers';
import { TransactionsServices, TasksService } from './services';
import { Transaction, TransactionSchema } from '../../schemas';
import { EtherscanModule } from '../../api/etherscan';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
    EtherscanModule,
  ],
  controllers: [TransactionController],
  providers: [TransactionsServices, TasksService],
})
export class TransactionModule {}
