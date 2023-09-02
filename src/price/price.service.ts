import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PriceService {
  private _tokenPriceCache = {};

  constructor() {
    setInterval(() => this.refreshTokenPrice(), 2000);
  }

  async refreshTokenPrice() {
    const res = await axios.get(`https://api4.binance.com/api/v3/ticker/price`);
    res.data.forEach((row) => {
      if (row.symbol === 'ETHUSDT') {
        this._tokenPriceCache['ETH'] = row.price;
      }
      if (row.symbol === 'LINKUSDT') {
        this._tokenPriceCache['LINK'] = row.price;
      }
    });
    this._tokenPriceCache['USDC'] = '1.0000';
  }

  async getTokensPrice(): Promise<any> {
    if (!this._tokenPriceCache) {
      await this.refreshTokenPrice();
    }
    return this._tokenPriceCache;
  }
}
