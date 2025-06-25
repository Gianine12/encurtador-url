import { IsInt, IsNumber, IsOptional, IsPositive, IsUrl } from 'class-validator';

export class CreateUrlDto {
  @IsUrl()
  link: string;

  @IsNumber()
  idUser: number;
}

export class UpdateUrlDto{
  @IsOptional()
  @IsUrl()
  link?:string;

  @IsOptional()
  @IsNumber()
  idUser?: number;
}

export class SoftDeleteUrlDto{
  @IsInt()
  @IsPositive()
  id: number;
}