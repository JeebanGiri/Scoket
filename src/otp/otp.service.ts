import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { OTP, OtpTypes } from './entities/otp.entity';
import { generateOtp } from 'src/@helpers/utils';

@Injectable()
export class OtpService {
  constructor(private dataSource: DataSource) {}
  async createOtp(user_id: string, type: OtpTypes) {
    await this.dataSource.getRepository(OTP).delete({
      user_id: user_id,
      otp_type: type,
    });
    const otp = new OTP();
    otp.code = await generateOtp(6);
    otp.otp_type = type;
    otp.user_id = user_id;
    return await this.dataSource.getRepository(OTP).save(otp);
  }
}
