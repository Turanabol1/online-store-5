import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module.js';
import { MaterialsController } from './materials.controller.js';
import { MaterialsService } from './materials.service.js';

@Module({
  imports: [SharedModule],
  controllers: [MaterialsController],
  providers: [MaterialsService],
  exports: [MaterialsService], // потрібен OrdersModule
})
export class MaterialsModule {}
