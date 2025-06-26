import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as crypto from 'crypto';
import { Repository } from 'typeorm';
import { CreateUrlDto, UpdateUrlDto } from './dto/url.dto';
import { Url } from './entities/url.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Url)
    private readonly urlRepo: Repository<Url>
  ) {}

  async create(url: CreateUrlDto, userId?: number): Promise<Url> {
    const hash = crypto.randomBytes(4).toString('hex');

    const exists = await this.urlRepo.findOne({ where: { link: url.link, idUser: userId } });
    if (exists) {
      throw new BadRequestException('Esta URL já foi encurtada por este usuário.');
    }
    if(userId){
      const newUrl = this.urlRepo.create({
        link:url.link,
        urlEncurtada: hash,
        idUser: userId,
      });
       await this.urlRepo.save(newUrl);
       return newUrl
    }else{
      const newUrl = this.urlRepo.create({
        link: url.link,
        urlEncurtada: hash,
      })
      return await this.urlRepo.save(newUrl);
       
    }
  }


  async redirecionar(urlEncurtada: string): Promise<string> {
    const url = await this.urlRepo.findOne({
      where: { urlEncurtada },
    });

    if (!url) throw new NotFoundException('URL não encontrada');

    this.incrementClick(url.id)

    return url.link;
  }

  findAll():Promise<Url[]>{
    return this.urlRepo.find();
  }

  async update(id: number, dto: UpdateUrlDto):Promise<Url> {
    const url = await this.urlRepo.findOneBy({ id });
    if (!url) {
      throw new NotFoundException(`URL com ID ${id} não encontrada`);
    }

    const hash = crypto.randomBytes(4).toString('hex');

    await this.urlRepo.update(id,{
      ...dto,
      urlEncurtada: hash
    });
    const updated = await this.urlRepo.findOneBy({ id });

    if (!updated) {
      throw new NotFoundException(`Erro ao buscar a URL atualizada com ID ${id}`);
    }

    return updated;
  }

  async softDelete(id: number): Promise<void> {
    const url = await this.urlRepo.findOneBy({ id });
    if (!url) {
      throw new NotFoundException(`URL com ID ${id} não encontrada`);
    }
    await this.urlRepo.delete(id);
  }

  findByUsuario(idUser: number) {
    return this.urlRepo.find({ where: { idUser } });
  }

  incrementClick(id: number) {
    return this.urlRepo.increment({ id }, 'clicks', 1);
  }
}
