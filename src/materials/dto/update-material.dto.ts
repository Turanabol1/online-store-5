import type { UnitOfMeasure } from '../entities/material.entity.js';

export class UpdateMaterialDto {
  readonly title?: string;
  readonly price?: number;
  readonly unitOfMeasure?: UnitOfMeasure;
  readonly weightPerUnitKg?: number;
  readonly isHeavyCargo?: boolean;
}
