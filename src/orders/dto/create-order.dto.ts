export class CreateOrderDto {
  readonly productId: string;
  readonly quantity: number;
  readonly customerEmail: string;
}
