import {
  IsOptional,
  IsPositive,
  IsString,
  IsDate,
  IsNumber,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class SearchTransactions {
  @IsPositive()
  @Type(() => Number)
  limit: number;

  // @IsPositive()
  // @Allow(0)
  @IsNumber()
  @Type(() => Number)
  skip: number;

  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  blockNumber?: number;

  @IsOptional()
  @IsString()
  transactionId?: string;

  @IsOptional()
  @IsString()
  senderAddress?: string;

  @IsOptional()
  @IsString()
  recipientAddress?: string;

  @IsOptional()
  @IsString()
  blockConfirmations?: string;

  @IsOptional()
  @Transform(({ obj }) => new Date(obj.date))
  @IsDate()
  date?: Date;

  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @IsString()
  transactionFee?: string;
}
