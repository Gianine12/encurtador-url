import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUrlDto, UpdateUrlDto } from './dto/url.dto';
import { Url } from './entities/url.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Url)
    private readonly urlRepo: Repository<Url>
  ) {}

  async create(url: CreateUrlDto) {
    const exists = await this.urlRepo.findOne({ where: { link: url.link, idUser: url.idUser } });
    if (exists) {
      throw new BadRequestException('Esta URL já foi encurtada por este usuário.');
    }
    const newUrl = this.urlRepo.create(url);
    return this.urlRepo.save(newUrl);
  }

  findAll() {
    return this.urlRepo.find();
  }

  async update(id: number, dto: UpdateUrlDto) {
    const url = await this.urlRepo.findOneBy({ id });
    if (!url) {
      throw new NotFoundException(`URL com ID ${id} não encontrada`);
    }
    await this.urlRepo.update(id, dto);
    return this.urlRepo.findOneBy({ id });
  }

  async remove(id: number) {
    const url = await this.urlRepo.findOneBy({ id });
    if (!url) {
      throw new NotFoundException(`URL com ID ${id} não encontrada`);
    }
    return this.urlRepo.delete(id);
  }

  findByUsuario(idUser: number) {
    return this.urlRepo.find({ where: { idUser } });
  }

  incrementClick(id: number) {
    return this.urlRepo.increment({ id }, 'cliques', 1);
  }
}
