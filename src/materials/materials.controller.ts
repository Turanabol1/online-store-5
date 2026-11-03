import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RequestIdService } from '../shared/request-id.service.js';
import { CreateMaterialDto } from './dto/create-material.dto.js';
import { UpdateMaterialDto } from './dto/update-material.dto.js';
import { MaterialsService } from './materials.service.js';

@Controller('materials')
export class MaterialsController {
  private readonly logger = new Logger(MaterialsController.name);

  constructor(
    private readonly materialsService: MaterialsService,
    private readonly requestId: RequestIdService,
  ) {}

  @Get()
  @Header('X-API-Version', '1.0')
  @Header('X-Service-Status', 'operational')
  findAll(@Query('search') search?: string, @Query('limit') limit?: string) {
    this.logger.log(`[req ${this.requestId.id}] GET /materials`);
    return this.materialsService.findAll(search, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.log(`[req ${this.requestId.id}] GET /materials/${id}`);
    return this.materialsService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDto: CreateMaterialDto) {
    this.logger.log(`[req ${this.requestId.id}] POST /materials`);
    return this.materialsService.create(createDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateMaterialDto) {
    this.logger.log(`[req ${this.requestId.id}] PATCH /materials/${id}`);
    return this.materialsService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    this.logger.log(`[req ${this.requestId.id}] DELETE /materials/${id}`);
    this.materialsService.remove(id);
  }
}
