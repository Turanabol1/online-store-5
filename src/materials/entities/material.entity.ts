// Варіант 6: будівельні матеріали
export const UNITS_OF_MEASURE = ['kg', 'm2', 'm3'] as const;
export type UnitOfMeasure = (typeof UNITS_OF_MEASURE)[number];

export class MaterialEntity {
  id: string;
  title: string;
  slug: string;
  price: number;
  unitOfMeasure: UnitOfMeasure;
  weightPerUnitKg: number;
  isHeavyCargo: boolean;
}
