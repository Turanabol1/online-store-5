import { randomUUID } from 'node:crypto';
import { Injectable, Logger, Scope } from '@nestjs/common';

// Scope.REQUEST: для кожного HTTP-запиту Nest створює новий екземпляр
@Injectable({ scope: Scope.REQUEST })
export class RequestIdService {
  private static createdInstances = 0;
  private readonly logger = new Logger(RequestIdService.name);

  readonly id = randomUUID().slice(0, 8);
  readonly instanceNumber = ++RequestIdService.createdInstances;

  constructor() {
    this.logger.log(`Створено екземпляр #${this.instanceNumber} (requestId=${this.id})`);
  }
}
