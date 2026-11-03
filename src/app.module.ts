import { Module } from '@nestjs/common';
import { MaterialsModule } from './materials/materials.module.js';
import { OrdersModule } from './orders/orders.module.js';
import { SharedModule } from './shared/shared.module.js';

@Module({
  imports: [MaterialsModule, OrdersModule, SharedModule],
})
export class AppModule {}
