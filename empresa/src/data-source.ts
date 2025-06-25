import { DataSource } from 'typeorm';
import { Company } from './entities/empresa.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'encurtador-url-empresa',
  synchronize: false,
  entities: [Company],
  migrations: ['src/database/migrations/*.ts'],
});
