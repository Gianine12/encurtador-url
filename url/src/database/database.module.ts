import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from 'src/entities/url.entity';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'encurtador-url-empresa',
      entities: [Url],
      synchronize: true,//mudar para quando for para producao
    })
  ]
})
export class DatabaseModule {}
