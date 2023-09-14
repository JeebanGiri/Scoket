import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum OtpTypes {
  EMAILVERIFICATION = 'EMAIL_VERIFICATION',
  PASSWORDRESET = 'PASSWORD_RESET',
  OTHER = 'OTHER',
}
@Entity({ name: 'otp' })
export class OTP {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({type: 'varchar', length: 6})
  code: string;

  @Column({ type: 'enum', enum: OtpTypes, default: OtpTypes.EMAILVERIFICATION })
  otp_type: OtpTypes;

  @CreateDateColumn()
  createdAt: string;

  // ------RELATIONS---------
  user_id: string;
  @ManyToOne(() => User, (user) => user.opts)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
