import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt.auth.guard';
import { OptionalJwtAuthGuard } from './auth/optional-jwt-auth.guard';
import { CreateUrlDto, UpdateUrlDto } from './dto/url.dto';

@Controller()
export class AppController {
  constructor(private readonly urlService: AppService) {}

  @Post('encurtas')
  @UseGuards(OptionalJwtAuthGuard)
  @ApiOperation({summary: 'Cria uma URL encurtada'})
  @ApiBody({type: CreateUrlDto})
  create(@Body() dto: CreateUrlDto, @Req() req: Request) {
    const userId = (req as any).user?.id;
    return this.urlService.create(dto,userId);
  }

  @Get(':codigo')
  @ApiOperation({summary: 'Redireciona usuarios atravez da url encurtada'})
  @ApiBody({type: String})
  async redirecionar(@Param('codigo') codigo: string, @Res() res: Response) {
    const destino = await this.urlService.redirecionar(codigo);
    return res.redirect(destino);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.urlService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({summary: 'Atualiza a url e retorna a uma nova url encurtada'})
  @ApiBody({type: UpdateUrlDto})
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateUrlDto) {
    return this.urlService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({summary: 'Deleta uma url'})
  @ApiBody({type: Number})
  remove(@Param('id') id: number) {
    return this.urlService.softDelete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('usuario/:usuarioId')
  @ApiOperation({summary: 'Busca todas url cadastradas pelo usuario'})
  @ApiBody({type: Number})
  getUrlsByUsuario(@Param('usuarioId') usuarioId: number) {
    return this.urlService.findByUsuario(usuarioId);
  }
}


