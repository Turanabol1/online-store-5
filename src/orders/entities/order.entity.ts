export class OrderEntity {
  orderId: string;
  customerEmail: string;
  productId: string;
  productTitle: string;
  productSlug: string;
  unitPrice: number;
  quantity: number;
  subtotal: number;
  taxAmount: number;
  total: number;
  currency: string;
  status: 'confirmed';
  createdAt: Date;
}
