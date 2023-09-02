import { Injectable } from '@nestjs/common';
import { TransferRequest } from './dto/transaction-request.dto';

@Injectable()
export class TransactionService {
  async transfer(transferRequest: TransferRequest) {
    throw new Error('Method not implemented.');
  }
}
