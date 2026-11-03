import { Body, Controller, Get, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { RequestIdService } from '../shared/request-id.service.js';
import { CreateOrderDto } from './dto/create-order.dto.js';
import { OrdersService } from './orders.service.js';

@Controller('orders')
export class OrdersController {
  private readonly logger = new Logger(OrdersController.name);

  constructor(
    private readonly ordersService: OrdersService,
    private readonly requestId: RequestIdService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDto: CreateOrderDto) {
    this.logger.log(`[req ${this.requestId.id}] POST /orders`);
    // requestId передаємо параметром: якщо інжектувати RequestIdService прямо в сервіс,
    // сервіс теж стане request-scoped і для нього не спрацює OnModuleInit
    return this.ordersService.createOrder(createDto, this.requestId.id);
  }

  @Get()
  findAll() {
    this.logger.log(`[req ${this.requestId.id}] GET /orders`);
    return this.ordersService.findAll();
  }
}
