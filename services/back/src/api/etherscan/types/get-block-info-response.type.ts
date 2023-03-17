import { GetTransactionByHashResponseType } from './get-transaction-by-hash-response.type';

export type GetBlockInfoResponse = {
  jsonrpc: string;
  id: 1;
  result: {
    baseFeePerGas: string;
    difficulty: string;
    extraData: string;
    gasLimit: string;
    gasUsed: string;
    hash: string;
    logsBloom: string;
    miner: string;
    mixHash: string;
    nonce: string;
    number: string;
    parentHash: string;
    receiptsRoot: string;
    sha3Uncles: string;
    size: string;
    stateRoot: string;
    timestamp: string;
    totalDifficulty: string;
    transactions: GetTransactionByHashResponseType['result'][];
    transactionsRoot: string;
    uncles: [];
  };
};
