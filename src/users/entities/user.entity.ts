import { OTP } from 'src/otp/entities/otp.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // -----Relations-----------
  @OneToMany(() => OTP, (otp) => otp.user)
  opts: OTP[];
}
