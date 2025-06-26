import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt.auth.guard';
import { CreateUrlDto, UpdateUrlDto } from './dto/url.dto';

@Controller('url')
export class AppController {
  constructor(private readonly urlService: AppService) {}

  @Post()
  create(@Body() dto: CreateUrlDto) {
    return this.urlService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.urlService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateUrlDto) {
    return this.urlService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.urlService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('usuario/:usuarioId')
  getUrlsByUsuario(@Param('usuarioId') usuarioId: number) {
    return this.urlService.findByUsuario(usuarioId);
  }
}


