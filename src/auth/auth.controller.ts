import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @Post('/create-user')
  createaccount(@Body() signUpDto: SignupDto){
    return this.authService.createUser(signUpDto)
  }


  // @Get('/finduser/')
  // findall() {

  // }
}
