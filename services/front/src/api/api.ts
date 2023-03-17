import { apiInstance } from './instances';
import { TransactionResponseType, SearchParamsType } from './contract';

export class Api {
  static async getTransaction(
    params: SearchParamsType,
  ): Promise<TransactionResponseType> {
    const response = await apiInstance.request<TransactionResponseType>({
      method: 'get',
      params,
      url: '/transaction',
    });

    return response.data;
  }
}
