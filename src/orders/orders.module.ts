import { Module } from '@nestjs/common';
import { MaterialsModule } from '../materials/materials.module.js';
import { SharedModule } from '../shared/shared.module.js';
import { OrdersController } from './orders.controller.js';
import { OrdersService } from './orders.service.js';

@Module({
  imports: [MaterialsModule, SharedModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
