import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('usuario')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post()
  @ApiOperation({summary: 'Criacao de um usuario'})
  @ApiBody({type: CreateUserDto})
  create(@Body() user: CreateUserDto){
    return this.appService.create(user)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({summary: 'Trazer todos usuario'})
  getAll() {
    return this.appService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({summary: 'Atualizacao dos dados de um usuario'})
  @ApiBody({type: UpdateUserDto})
  update(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
    return this.appService.update(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({summary: 'Deletar usuario'})
  @ApiBody({type: Number})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.appService.softDelete(id);
  }

}
