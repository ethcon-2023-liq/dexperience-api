import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransferRequest } from './dto/transaction-request.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('transfer/fee')
  async getFees() {
    return {
      code: 0,
      data: {
        ETH: '0.001',
        LINK: '1.000',
        USDC: '8.000',
      },
    };
  }

  @Post('transfer')
  async transfer(@Body() transferRequest: TransferRequest) {
    const res = await this.transactionService.transfer(transferRequest);
    return {
      code: 0,
      data: {
        txid: res,
      },
    };
  }
}
