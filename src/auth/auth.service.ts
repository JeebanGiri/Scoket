import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SignupDto } from './dto/auth.dto';
import { User } from 'src/users/entities/user.entity';
import * as argon from 'argon2';
import { OtpService } from 'src/otp/otp.service';
import { OtpTypes } from 'src/otp/entities/otp.entity';
import { sendMail } from 'src/@helpers/mail';

@Injectable()
export class AuthService {
  constructor(
    private readonly dataSource: DataSource,
    private otpService: OtpService,
  ) {}

  async createUser(payload: SignupDto) {
    const { username, email, password } = payload;

    const userExist = await this.dataSource
      .getRepository(User)
      .findOne({ where: { email } });
    if (userExist)
      throw new BadRequestException('User with this email already exists.');

    const user = await this.dataSource.getRepository(User).save({
      username,
      email,
      password: await argon.hash(password),
    });
    const otp = await this.otpService.createOtp(
      user.id,
      OtpTypes.EMAILVERIFICATION,
    );
    sendMail({
      to: user.email,
      subject: 'Verify your Account',
      html: `Your Account Verification OTP is ${otp.code}`,
    });
    delete user.password;
    return {
      message: 'User registered Please verify your account',
      user: { ...user },
    };
  }
}
