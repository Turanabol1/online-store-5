import type { ValueProvider } from '@nestjs/common';

export const STORE_CONFIG = 'STORE_CONFIG';

export interface StoreConfig {
  storeName: string;
  defaultCurrency: string;
  taxPercent: number;
}

// Custom provider за стратегією useValue: готовий статичний об'єкт під рядковим токеном
export const StoreConfigProvider: ValueProvider<StoreConfig> = {
  provide: STORE_CONFIG,
  useValue: {
    storeName: 'BuildMart',
    defaultCurrency: 'UAH',
    taxPercent: 20,
  },
};
