import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TransferDto {
  @IsNotEmpty()
  @IsNumber()
  transferId: number;

  @IsNotEmpty()
  @IsString()
  sender: string;

  @IsNotEmpty()
  @IsString()
  addressee: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  dateTransfer: string;
}
