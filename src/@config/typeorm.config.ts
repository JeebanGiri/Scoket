import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DATABASE } from 'src/constant';
import { User } from 'src/users/entities/user.entity';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DATABASE.host,
  port: DATABASE.port,
  username: DATABASE.user,
  password: DATABASE.password,
  database: DATABASE.database,
  autoLoadEntities: true,
  entities: [User],
  synchronize: true,
};
