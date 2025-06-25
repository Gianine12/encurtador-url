import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'encurtador-url-usuario',
      entities: [User],
      synchronize: true,//mudar para quando for para producao
    })
  ]
})
export class DatabaseModule {}
