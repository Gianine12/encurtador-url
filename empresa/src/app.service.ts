import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/empresa.dto';
import { Company } from './entities/empresa.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Company) private readonly empresaRepo: Repository<Company>,
    private readonly http: HttpService
  ) {}

  async create(dto: CreateCompanyDto) {
    const exists = await this.empresaRepo.findOne({ where: { cnpj: dto.cnpj } });
    if (exists) {
      throw new BadRequestException('CNPJ já está em uso.');
    }
    const empresa = this.empresaRepo.create(dto);
    return this.empresaRepo.save(empresa);
  }

  findAll() {
    return this.empresaRepo.find();
  }

  async update(id: number, dto: UpdateCompanyDto) {
    const empresa = await this.empresaRepo.findOneBy({ id });
    if (!empresa) {
      throw new NotFoundException(`Empresa com ID ${id} não encontrada`);
    }

    if (dto.cnpj && dto.cnpj !== empresa.cnpj) {
      const cnpjExists = await this.empresaRepo.findOne({ where: { cnpj: dto.cnpj } });
      if (cnpjExists) {
        throw new BadRequestException('Este CNPJ já está cadastrado.');
      }
    }

    await this.empresaRepo.update(id, dto);
    return this.empresaRepo.findOneBy({ id });
  }

  async remove(id: number) {
    const empresa = await this.empresaRepo.findOneBy({ id });
    if (!empresa) {
      throw new NotFoundException(`Empresa com ID ${id} não encontrada`);
    }
    return this.empresaRepo.delete(id);
  }

  async getUsuariosFromUserService(empresaId: number) {
    const response = await firstValueFrom(
      this.http.get(`http://usuario:3000/usuarios?empresaId=${empresaId}`)
    );
    return response.data;
  }
}