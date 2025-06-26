import { DataSource } from 'typeorm';
import { Url } from './entities/url.entity';
// passar as informacoes criticas para um .env
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'encurtador-url-url',
  synchronize: false,
  entities: [Url],
  migrations: ['src/database/migrations/*.ts'],
});
