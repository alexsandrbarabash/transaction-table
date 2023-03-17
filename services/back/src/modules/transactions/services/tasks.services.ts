import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TransactionDocument, Transaction } from '../../../schemas';
import { EtherscanService } from '../../../api/etherscan';

@Injectable()
export class TasksService implements OnApplicationBootstrap {
  private readonly logger = new Logger(TasksService.name);
  private latestBlockNumber: number;

  constructor(
    private readonly schedulerRegistry: SchedulerRegistry,
    private readonly configService: ConfigService,
    private readonly etherscanService: EtherscanService,
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<TransactionDocument>,
  ) {}

  async onApplicationBootstrap() {
    await this.init();

    const job = new CronJob(this.configService.get('SYNC_TIMER'), () =>
      this.handleCron(),
    );
    this.schedulerRegistry.addCronJob('sync_transaction', job);
    job.start();
  }

  private createArray(start, end): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  private async init(): Promise<void> {
    const transactions = await this.transactionModel
      .find({})
      .sort({ blockNumber: -1 })
      .limit(1)
      .exec();

    const count = await this.etherscanService.blockCount();
    this.latestBlockNumber = count;

    if (!transactions.length) {
      if (count <= 1000) {
        await this.syncBlocks(0, count);
      } else {
        await this.syncBlocks(count - 1000, count);
      }
    }
  }

  private async handleCron(): Promise<void> {
    this.logger.log('Cron execute');

    const transactions = await this.transactionModel
      .find({})
      .sort({ blockNumber: -1 })
      .limit(1)
      .exec();

    const count = await this.etherscanService.blockCount();
    this.latestBlockNumber = count;

    const [transaction] = transactions;

    if (transaction?.blockNumber && count !== transaction?.blockNumber) {
      await this.syncBlocks(transaction?.blockNumber, count);
    }
  }

  private async syncBlocks(from: number, to: number): Promise<void> {
    const arr = this.createArray(from, to);

    // Use "for await" instead Promise.all to avoid error "max rate limit reached"
    // Maybe it makes sense to use a setTimeout
    for await (const item of arr) {
      await this.syncBlock(item);
    }
  }

  private async syncBlock(blockNumber: number): Promise<void> {
    this.logger.log('Sync block', blockNumber);
    const info = await this.etherscanService.blockInfo(blockNumber);
    for await (const item of info.result.transactions) {
      const createdTransaction = new this.transactionModel({
        blockNumber,
        transactionId: item.blockHash,
        senderAddress: item.from,
        recipientAddress: item.to,
        transactionFee: parseInt(item.gasPrice, 16),
        value: parseInt(item.value, 16),
        blockConfirmations: this.latestBlockNumber - blockNumber,
        date: new Date(parseInt(info.result.timestamp, 16) * 1000),
      });
      await createdTransaction.save();
    }
  }
}
