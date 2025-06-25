import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/entities/empresa.entity';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'encurtador-url-empresa',
      entities: [Company],
      synchronize: true,//mudar para quando for para producao
    })
  ]
})
export class DatabaseModule {}
