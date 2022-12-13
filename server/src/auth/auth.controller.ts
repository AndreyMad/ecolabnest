import {
  Get,
  Post,
  Request,
  UseGuards,
  Controller,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/customAuthGuard';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user) {
    return this.authService.login(user);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async user(@Request() req) {
    return this.authService.me(req.user.id);
  }
}
