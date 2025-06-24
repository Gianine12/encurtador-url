import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly db: DatabaseService) {}

  getUserById(id:number){
    return this.db.findUserById(id);
  }

  cadastro(): string{
    return 'Cadastro'
  }
}
