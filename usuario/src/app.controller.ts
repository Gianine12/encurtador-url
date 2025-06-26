import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('usuario')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post()
  create(@Body() user: CreateUserDto){
    return this.appService.create(user)
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
    return this.appService.update(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.appService.softDelete(id);
  }

}
