import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateCompanyDto{
  @IsNotEmpty()
  @IsString()
  name:string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha:string;

  @IsNotEmpty()
  @IsString()
  cnpj:string
}


export class UpdateCompanyDto{
  @IsOptional()
  @IsString()
  name?:string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  senha?:string;

  @IsOptional()
  @IsString()
  cnpj:string
}

export class SoftDeleteCompanyDto{
  @IsInt()
  @IsPositive()
  id: number;
}