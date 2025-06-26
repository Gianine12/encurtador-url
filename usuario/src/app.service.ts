import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ){}

  async getAll(): Promise<User[]>{
    return await this.userRepo.find()
  }

  async findOne(id: number): Promise<User>{
    const user = await this.userRepo.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return user;
  }

  async create(newUser: CreateUserDto): Promise<User>{
    const exists = await this.userRepo.findOne({
      where: { email: newUser.email },
    });

    if (exists) {
      throw new BadRequestException('Email já está em uso.');
    }

    const user = this.userRepo.create(newUser);
    return this.userRepo.save(user);
  }

  async softDelete(id: number): Promise<void>{
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`Usuario com ID ${id} não encontrada`);
    }
    await this.userRepo.softDelete(id);
  }

  async update(id:number, user: UpdateUserDto): Promise<User>{
    const userExist = await this.findOne(id);

    if (user.email && user.email !== userExist.email) {
      const emailExists = await this.userRepo.findOne({
        where: { email: user.email },
      });
      if (emailExists) {
        throw new BadRequestException('Este email já está cadastrado.');
      }
    }

    await this.userRepo.update(id, user);
    return this.findOne(id);
  }
}
