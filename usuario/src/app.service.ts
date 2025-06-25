import { Injectable } from '@nestjs/common';
import { CreateUserDto, SoftDeleteUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class AppService {
  async getAll(){}

  async create(newUser: CreateUserDto){}

  async softDelete(user: SoftDeleteUserDto){}

  async update(user: UpdateUserDto){}
}
