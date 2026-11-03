import { Module } from '@nestjs/common';
import { FEE_CALCULATOR, FeeCalculatorProvider } from './config/fee-calculator.provider.js';
import { STORE_CONFIG, StoreConfigProvider } from './config/app-config.provider.js';
import { RequestIdService } from './request-id.service.js';
import { SlugService } from './slug/slug.service.js';

@Module({
  providers: [SlugService, StoreConfigProvider, FeeCalculatorProvider, RequestIdService],
  exports: [SlugService, STORE_CONFIG, FEE_CALCULATOR, RequestIdService],
})
export class SharedModule {}
