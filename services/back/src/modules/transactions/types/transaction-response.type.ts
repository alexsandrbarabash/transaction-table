import { Transaction } from '../../../schemas';

export type TransactionResponseType = {
  transactions: Transaction[];
  limit: number;
  skip: number;
  count: number;
};
