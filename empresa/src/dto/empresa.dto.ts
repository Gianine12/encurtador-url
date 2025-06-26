import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateCompanyDto{
  @ApiProperty({ example: 'Nome da empresa'})
  link: string;
  @IsNotEmpty()
  @IsString()
  name:string;

  @ApiProperty({ example: 'empresa@gmail.com', description: "Email da empresa"})
  @IsEmail()
  email: string;

  @ApiProperty({ example: '1God@123', description: "Senha da empresa"})
  @IsNotEmpty()
  @IsString()
  senha:string;

  @ApiProperty({ example: '78.718.821/0001-55', description: "CNPJ da empresa"})
  @IsNotEmpty()
  @IsString()
  cnpj:string
}


export class UpdateCompanyDto{
  @ApiProperty({ example: 'Nome da empresa'})
  @IsOptional()
  @IsString()
  name?:string;

  @ApiProperty({ example: 'empresa@gmail.com', description: "Email da empresa"})
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ example: '1God@123', description: "Senha da empresa"})
  @IsOptional()
  @IsString()
  @MinLength(6)
  senha?:string;

  @ApiProperty({ example: '78.718.821/0001-55', description: "CNPJ da empresa"})
  @IsOptional()
  @IsString()
  cnpj:string
}

export class SoftDeleteCompanyDto{
  @IsInt()
  @IsPositive()
  id: number;
}