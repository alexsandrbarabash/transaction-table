export type SearchParamsType = {
  limit: number;
  skip: number;
  blockNumber?: number;
  transactionId?: string;
  senderAddress?: string;
  recipientAddress?: string;
  blockConfirmations?: string;
  value?: string;
  transactionFee?: string;
};

export type Transaction = {
  blockNumber: number;
  transactionId: string;
  senderAddress: string;
  recipientAddress: string;
  blockConfirmations: string;
  date: string;
  value: string;
  transactionFee: string;
};

export type TransactionResponseType = {
  transactions: Transaction[];
  limit: number;
  skip: number;
  count: number;
};
