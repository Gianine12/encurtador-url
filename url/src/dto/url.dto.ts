import { IsInt, IsNumber, IsOptional, IsPositive, IsUrl } from 'class-validator';

export class CreateUrlDto {
  @IsUrl()
  link: string;

  @IsNumber()
  idUser: number;

  @IsUrl()
  ulrEncurtada: string

  @IsNumber()
  clicks: number
}

export class UpdateUrlDto{
  @IsOptional()
  @IsUrl()
  link?:string;

  @IsOptional()
  @IsNumber()
  idUser?: number;

  @IsOptional()
  @IsUrl()
  ulrEncurtada?: string

  @IsOptional()
  @IsNumber()
  clicks?: number
}

export class SoftDeleteUrlDto{
  @IsInt()
  @IsPositive()
  id: number;
}