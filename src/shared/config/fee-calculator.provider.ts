import type { FactoryProvider } from '@nestjs/common';
import { STORE_CONFIG } from './app-config.provider.js';
import type { StoreConfig } from './app-config.provider.js';

export const FEE_CALCULATOR = 'FEE_CALCULATOR';

export interface FeeCalculator {
  calculateTax(amount: number): number;
}

// Custom provider за стратегією useFactory: залежність STORE_CONFIG приходить через inject
export const FeeCalculatorProvider: FactoryProvider<FeeCalculator> = {
  provide: FEE_CALCULATOR,
  useFactory: (config: StoreConfig): FeeCalculator => ({
    // податок у відсотках від суми, округлений до копійок
    calculateTax: (amount: number): number => Math.round(amount * config.taxPercent) / 100,
  }),
  inject: [STORE_CONFIG],
};
