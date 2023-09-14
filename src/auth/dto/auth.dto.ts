import { Transform } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class SignupDto {
  @IsString()
  username: string;

  @IsEmail()
  @MinLength(3)
  @Transform(({ value }) => value.trim())
  email: string;

  @IsStrongPassword({
    minLength: 3,
    minLowercase: 1,
    minSymbols: 1,
    minUppercase: 1,
    minNumbers: 1,
  })
  password: string;
}
export class LoginDto {
  @IsEmail()
  @MinLength(3)
  @Transform(({ value }) => value.trim())
  email: string;

  @IsStrongPassword({
    minLength: 3,
    minLowercase: 1,
    minSymbols: 1,
    minUppercase: 1,
    minNumbers: 1,
  })
  password: string;
}
