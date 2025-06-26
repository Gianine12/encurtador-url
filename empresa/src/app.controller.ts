import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/empresa.dto';

@Controller('empresa')
export class AppController {
  constructor(private readonly empresaService: AppService) {}

  @Post()
  @ApiOperation({summary: 'Criacao de uma emprea'})
  @ApiBody({type: CreateCompanyDto})
  create(@Body() dto: CreateCompanyDto) {
    return this.empresaService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.empresaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({summary: 'Atualizacao dos dados cadastrais de uma empresa'})
  @ApiBody({type: UpdateCompanyDto})
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCompanyDto,
  ) {
    return this.empresaService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.empresaService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/usuarios')
  getUsuarios(@Param('id', ParseIntPipe) id: number) {
    return this.empresaService.getUsuariosFromUserService(id);
  }
}
