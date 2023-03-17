import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

import {
  BlockNumberResponseType,
  GetTransactionByHashResponseType,
  GetBlockInfoResponse,
} from './types';

@Injectable()
export class EtherscanService {
  constructor(private readonly configService: ConfigService) {}

  async blockCount(): Promise<number> {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${this.configService.get(
        'ETHERSCAN_API_KEY',
      )}`,
      headers: {},
    };

    const response = await axios<BlockNumberResponseType>(config);

    const decimalNumber = parseInt(response.data.result, 16);
    return decimalNumber;
  }

  async blockInfo(blockNumber: number): Promise<GetBlockInfoResponse> {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${blockNumber.toString(
        16,
      )}&boolean=true&apikey=${this.configService.get('ETHERSCAN_API_KEY')}`,
      headers: {},
    };

    const response = await axios(config);
    return response.data;
  }

  async getTransactionInfo(
    hash: string,
  ): Promise<GetTransactionByHashResponseType> {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${hash}&apikey=${this.configService.get(
        'ETHERSCAN_API_KEY',
      )}`,
      headers: {},
    };

    const response = await axios<GetTransactionByHashResponseType>(config);

    return response.data;
  }
}
