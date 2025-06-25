import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateUserDto{
  @IsNotEmpty()
  @IsString()
  name:string

  @IsEmail()
  email:string

  @IsNotEmpty()
  @IsString()
  senha: string
}

export class UpdateUserDto{
  @IsOptional()
  @IsString()
  name?:string

  @IsOptional()
  @IsString()
  @MinLength(6)
  senha?: string

}

export class SoftDeleteUserDto{
  @IsInt()
  @IsPositive()
  id: number;
}
