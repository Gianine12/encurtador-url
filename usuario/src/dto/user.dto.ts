import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateUserDto{
  @ApiProperty({ example: 'Nome do Usuario'})
  @IsNotEmpty()
  @IsString()
  name:string

  
  @IsEmail()
  email:string

  @ApiProperty({ example: '1God@123', description: "Senha do usuario"})
  @IsNotEmpty()
  @IsString()
  senha: string
}

export class UpdateUserDto{
  @ApiProperty({ example: 'Nome do Usuario'})
  @IsOptional()
  @IsString()
  name?:string

  @ApiProperty({ example: 'usuario@gmail.com', description: "Email da usuario"})
  @IsOptional()
  @IsString()
  @MinLength(6)
  senha?: string

  @ApiProperty({ example: '1God@123', description: "Senha do usuario"})
  @IsEmail()
  @IsOptional()
  email:string
}

export class SoftDeleteUserDto{
  @IsInt()
  @IsPositive()
  id: number;
}

export class LoginDto {
  @ApiProperty({ example: 'usuario@gmail.com', description: "Email da usuario"})
  @IsEmail()
  email: string;

  @ApiProperty({ example: '1God@123', description: "Senha do usuario"})
  @IsString()
  senha: string;
}

export class AuthResponseDto {
  accessToken: string;
}
