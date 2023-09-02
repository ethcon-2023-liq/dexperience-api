import { Controller, Get } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get()
  async getPrices(): Promise<any> {
    const res = await this.priceService.getTokensPrice();
    return {
      code: 0,
      data: res,
    };
  }
}
