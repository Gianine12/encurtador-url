import { Body, Controller, Post } from '@nestjs/common';
import { AuthResponseDto, LoginDto } from './../dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto): Promise<AuthResponseDto> {
    const user = await this.authService.validateUser(dto.email, dto.senha);
    return this.authService.login(user);
  }

}
