import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsPositive, IsUrl } from 'class-validator';

export class CreateUrlDto {
  @ApiProperty({ example: 'https://meusite.com.br/artigo', description: 'Link original' })
  @IsUrl()
  link: string;

  @ApiProperty({ example: '1213', description: 'Id do usuario que crio esta url' })
  @IsOptional()
  @IsNumber()
  idUser?: number;
}

export class UpdateUrlDto{
  @ApiProperty({ example: 'https://meusite.com.br/artigo', description: 'Link original' })
  @IsOptional()
  @IsUrl()
  link?:string;

  @ApiProperty({ example: '1213', description: 'Id do usuario que crio esta url' })
  @IsOptional()
  @IsNumber()
  idUser?: number;
}

export class SoftDeleteUrlDto{
  @IsInt()
  @IsPositive()
  id: number;
}