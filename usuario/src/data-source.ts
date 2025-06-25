import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'encurtador-url-usuario',
  synchronize: false,
  entities: [User],
  migrations: ['src/database/migrations/*.ts'],
});
